import React from 'react'

export default function Client({ logo, alt, link }) {
    return (
        <div className="column is-2-desktop is-half-mobile has-text-centered">
            {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={logo} alt={alt} className="client-logo" loading="lazy" decoding="async" />
                </a>
            ) : (
                <img src={logo} alt={alt} className="client-logo" loading="lazy" decoding="async" />
            )}
        </div>
    )
}
