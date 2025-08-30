import React from 'react'
import PropTypes from 'prop-types'

/** Emotion & Styling */
import styled from '@emotion/styled'

const handleIconSize = size => {
    switch (size) {
        case 'sm':
            return '24px'
        case 'md':
            return '48px'
        case 'lg':
        default:
            return '64px'
    }
}

const StyledIcon = styled.img`
    height: ${props => handleIconSize(props.size)};
    margin: 0.5rem;
    display: inline;
    ${p => {
        const f = []
        if (p.isGrayscale) f.push('grayscale(100%)')
        if (p.isWhite) f.push('brightness(0) invert(1)')
        return f.length ? `filter: ${f.join(' ')};` : ''
    }};
`

export default function Icon(props) {
    const { source, size, isGrayscale, isWhite, alt, title } = props

    return (
        <StyledIcon
            size={size}
            src={source}
            isGrayscale={isGrayscale}
            isWhite={isWhite}
            alt={alt}
            title={title ?? alt}
            height={parseInt(handleIconSize(size), 10)}
            width={parseInt(handleIconSize(size), 10)}
        />
    )
}

Icon.defaultProps = {
    size: 'lg',
    isGrayscale: false,
    isWhite: false,
}

Icon.propTypes = {
    source: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    isGrayscale: PropTypes.bool,
    isWhite: PropTypes.bool,
    title: PropTypes.string,
}
