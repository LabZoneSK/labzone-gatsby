import React, { useState, useEffect } from 'react'
import { useIntl, FormattedMessage } from 'react-intl'
import { getCookie, setCookie } from '../../utils/helpers'

export default function ConnectSlideIn() {
    const [visibility, setVisibility] = useState(true)
    const intl = useIntl()

    const closeSlider = () => {
        setCookie('linkedInSliderShow', 'false', 30)
        setVisibility(false)
    }

    useEffect(() => {
        const showSlider = getCookie('linkedInSliderShow')
        if (showSlider !== 'false') {
            console.log('slider', showSlider)
            const liSlider = document.querySelector('.linkedInSlider')
            if (liSlider) {
                liSlider.classList.add('slideIn')
            }
        }
    }, [])

    if (visibility === false) {
        return <></>
    }

    return (
        <div className="linkedInSlider">
            <button
                className="close-button"
                onClick={closeSlider}
                aria-label={intl.formatMessage({
                    id: 'closePP',
                    defaultMessage: 'Close pop-up window',
                })}
            >
                <img src="/images/icons/cancel.svg" alt="" />
            </button>
            <h2 className="linkedInSlider-title">
                <FormattedMessage
                    id="liSliderTitle"
                    defaultMessage="Hey, are we already connected on LinkedIn?"
                />
            </h2>
            <p>
                <FormattedMessage
                    id="liSliderContent"
                    defaultMessage="LinkedIn is the largest business-oriented network, and is always smart
        to be connected. Let's discuss how we can help each other. Looking
        forward to connect with you on LinkedIn."
                />
            </p>

            <a
                className="lz-button button--isi mt-5"
                href="https://www.linkedin.com/in/martinstarosta"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FormattedMessage
                    id="liSliderButton"
                    defaultMessage="Get connected"
                />
            </a>
        </div>
    )
}
