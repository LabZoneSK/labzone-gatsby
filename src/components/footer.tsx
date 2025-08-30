import React, { FC } from 'react'
import { Link } from 'gatsby'
import { z } from 'zod'

import PropTypes from 'prop-types'

/** Emotion / Styling */
import styled from '@emotion/styled'

/** Utils */
import { sanitizeLink } from '../utils/helpers'
import { FormattedMessage } from 'react-intl'

const footerSchema = z.object({
    lang: z.string().optional(),
})

type FooterProps = z.infer<typeof footerSchema>

const Footer: FC<FooterProps> = ({ lang }) => {
    return (
        <div className="bg-dark text-white">
            <footer className="container">
                <div className="flex flex-row py-12 w-full">
                    <div className="grow">
                        <strong className="has-text-white">
                            © {new Date().getFullYear()} LabZone s.r.o
                        </strong>
                    </div>
                    <div>
                        <Link
                            to={sanitizeLink(`/${lang}/privacy-policy/`)}
                            className="has-text-white"
                        >
                            <FormattedMessage
                                id="privacyPolicy"
                                defaultMessage="Privacy Policy"
                            />
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
