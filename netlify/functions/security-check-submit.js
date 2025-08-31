// Netlify Function: Validate Cloudflare Turnstile token and proxy Security Check submission

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

function json(statusCode, data, extraHeaders = {}) {
    return {
        statusCode,
        headers: {
            'Content-Type': 'application/json',
            ...extraHeaders,
        },
        body: JSON.stringify(data),
    }
}

exports.handler = async (event) => {
    // Handle CORS preflight if needed
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
        const { turnstileToken, ...formData } = body

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
            return json(400, {
                error: 'Security verification failed',
                details: verification,
            })
        }

        // Proxy to external webhook (n8n) after successful verification
        const webhookUrl = process.env.SECURITY_CHECK_WEBHOOK_URL || 'http://n8n.labdemo.eu:5678/webhook/wordpress-security-shield'

        const forwardResponse = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })

        if (!forwardResponse.ok) {
            const text = await forwardResponse.text()
            return json(502, {
                error: 'Upstream webhook error',
                status: forwardResponse.status,
                body: text,
            })
        }

        const forwardJson = await forwardResponse.json().catch(() => ({}))
        return json(200, { success: true, message: 'Form submitted successfully', upstream: forwardJson })
    } catch (err) {
        return json(500, { error: 'Internal Server Error', message: err.message })
    }
}


