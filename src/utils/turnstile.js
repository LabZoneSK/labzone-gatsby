export async function verifyTurnstileToken(token, secretKey) {
    const formData = new FormData()
    formData.append('secret', secretKey)
    formData.append('response', token)

    try {
        const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            body: formData,
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()
        return result
    } catch (error) {
        console.error('Turnstile verification error:', error)
        return { success: false, error: error.message }
    }
}

export function validateTurnstileResponse(result) {
    return result.success === true
}