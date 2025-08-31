// Netlify Function: Validate Cloudflare Turnstile token and submit Contact form to HubSpot

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

function getClientIp(headers) {
    const xForwardedFor = headers['x-forwarded-for']
    if (xForwardedFor) {
        const parts = xForwardedFor.split(',')
        if (parts.length > 0) return parts[0].trim()
    }
    return headers['x-nf-client-connection-ip'] || headers['client-ip'] || null
}

async function verifyTurnstileToken({ token, secretKey, remoteIp }) {
    const params = new URLSearchParams()
    params.append('secret', secretKey)
    params.append('response', token)
    if (remoteIp) params.append('remoteip', remoteIp)

    const response = await fetch(TURNSTILE_VERIFY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params,
    })

    const result = await response.json()
    return result
}

function json(statusCode, data) {
    return {
        statusCode,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    }
}

exports.handler = async (event) => {
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 204,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
            body: '',
        }
    }

    if (event.httpMethod !== 'POST') {
        return json(405, { error: 'Method Not Allowed' })
    }

    try {
        const headers = Object.fromEntries(
            Object.entries(event.headers || {}).map(([k, v]) => [k.toLowerCase(), v])
        )
        const body = JSON.parse(event.body || '{}')
        const { turnstileToken, ...formValues } = body

        if (!turnstileToken) {
            return json(400, { error: 'Missing Turnstile token' })
        }

        const secretKey = process.env.TURNSTILE_SECRET_KEY
        if (!secretKey) {
            return json(500, { error: 'Server misconfiguration: TURNSTILE_SECRET_KEY is not set' })
        }

        const clientIp = getClientIp(headers)
        const verification = await verifyTurnstileToken({ token: turnstileToken, secretKey, remoteIp: clientIp })

        if (!verification.success) {
            return json(400, { error: 'Security verification failed', details: verification })
        }

        // Submit to HubSpot Forms API using existing form ID
        const hubspotPortalId = process.env.HUBSPOT_PORTAL_ID || '6690555'
        const hubspotFormGuid = process.env.HUBSPOT_FORM_GUID || 'd5ea374b-8855-4c0c-9e23-589f3e61bbbe'
        const url = `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${hubspotFormGuid}`

        const fields = Object.keys(formValues).map((key) => ({ name: key, value: formValues[key] }))
        const payload = {
            submittedAt: Date.now(),
            fields,
            context: { pageName: 'Contact page' },
            legalConsentOptions: {
                consent: {
                    consentToProcess: true,
                    text: 'I agree to the processing of personal data for the purpose of contacting.',
                    communications: [],
                },
            },
        }

        const resp = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        })

        const text = await resp.text()
        if (!resp.ok) {
            return json(502, { error: 'HubSpot submission failed', status: resp.status, body: text })
        }

        return json(200, { success: true, message: 'Contact form submitted', hubspot: text })
    } catch (err) {
        return json(500, { error: 'Internal Server Error', message: err.message })
    }
}


