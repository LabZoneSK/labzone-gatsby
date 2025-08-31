import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

export default function TurnstileWidget({
    sitekey,
    onVerify,
    onError,
    onExpire,
    theme = 'light',
    size = 'normal'
}) {
    const widgetRef = useRef(null)
    const widgetId = useRef(null)
    const [isClient, setIsClient] = useState(false)
    const onVerifyRef = useRef(onVerify)
    const onErrorRef = useRef(onError)
    const onExpireRef = useRef(onExpire)

    const getTurnstile = () => {
        if (typeof window === 'undefined') return undefined
        // JSDoc cast to satisfy type-aware linters
        return /** @type {any} */ (window).turnstile
    }

    useEffect(() => {
        setIsClient(true)
    }, [])

    // keep latest callbacks in refs so we don't recreate widget when they change
    useEffect(() => { onVerifyRef.current = onVerify }, [onVerify])
    useEffect(() => { onErrorRef.current = onError }, [onError])
    useEffect(() => { onExpireRef.current = onExpire }, [onExpire])

    useEffect(() => {
        if (!isClient) return

        const renderWidget = () => {
            const turnstile = getTurnstile()
            if (turnstile && widgetRef.current) {
                // Avoid double-rendering if already rendered
                if (widgetId.current) {
                    return
                }
                widgetId.current = turnstile.render(widgetRef.current, {
                    sitekey,
                    callback: (token) => onVerifyRef.current && onVerifyRef.current(token),
                    'error-callback': () => onErrorRef.current && onErrorRef.current(),
                    'expired-callback': () => onExpireRef.current && onExpireRef.current(),
                    theme,
                    size
                })
            }
        }

        if (getTurnstile()) {
            renderWidget()
        } else {
            const checkTurnstile = setInterval(() => {
                if (getTurnstile()) {
                    clearInterval(checkTurnstile)
                    renderWidget()
                }
            }, 100)

            return () => clearInterval(checkTurnstile)
        }

        return () => {
            const turnstile = getTurnstile()
            if (turnstile && widgetId.current) {
                turnstile.remove(widgetId.current)
                widgetId.current = null
            }
        }
    }, [isClient, sitekey, theme, size])

    if (!isClient) {
        return <div>Loading security verification...</div>
    }

    return <div ref={widgetRef} />
}

TurnstileWidget.propTypes = {
    sitekey: PropTypes.string.isRequired,
    onVerify: PropTypes.func.isRequired,
    onError: PropTypes.func,
    onExpire: PropTypes.func,
    theme: PropTypes.oneOf(['light', 'dark', 'auto']),
    size: PropTypes.oneOf(['normal', 'compact'])
}

TurnstileWidget.defaultProps = {
    onError: () => { },
    onExpire: () => { },
    theme: 'light',
    size: 'normal'
}