import React from 'react'

/** Components */
import Layout from 'components/layout'
import Section from 'components/section'
import FullBleed from 'components/fullBleed'
import SeoHelmet from 'components/seo/seoHelmet'
import ContactForm from 'components/contactForm'

import { FormattedMessage } from 'react-intl'
import { GENERAL_EMAIL } from 'common/constants'

/** Icons */
import LinkedIn from 'images/svg/linkedin.inline.svg'
import Twitter from 'images/svg/twitter.inline.svg'

export default function ContactEn({ location }) {
    return (
        <>
            <SeoHelmet
                title={`Contact us`}
                description="Get in touch with us. This page contains contact form, contact and billing information."
            />

            <Layout location={location} hasLastDark>
                <Section className="container">
                    <h1 className="section-title has-text-centered-mobile">
                        Connect with us
                    </h1>
                    <p>
                        Send your email to{' '}
                        <a href={`mailto:${GENERAL_EMAIL}`}>{GENERAL_EMAIL}</a>{' '}
                        or fill in the contact form bellow.
                        <br />
                        <b>You can expect a response within 48 hours</b> -
                        except for weekends.
                    </p>
                    <div className="columns is-vcentered">
                        <div className="column is-half pt-6">
                            <ContactForm />
                        </div>

                        <div className="column is-half has-text-centered">
                            <p className="mt-5">
                                <strong>{GENERAL_EMAIL}</strong>
                                <br />
                                <a href="tel:+421948272880">
                                    +421 948 272 880
                                </a>
                                <br />
                                <br />
                                <br />
                                Stay in touch
                            </p>
                            <div className="mt-1">
                                <a href="https://www.linkedin.com/company/labzonesk">
                                    <LinkedIn className="social-icon linkedin" />
                                    <span className="is-sr-only">
                                        Link to LabZone LinkedIn page
                                    </span>
                                </a>
                                <a href="https://twitter.com/LabZoneSK">
                                    <Twitter className="social-icon twitter" />
                                    <span className="is-sr-only">
                                        Link to LabZone Twitter profile
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Section>

                <FullBleed color="columbia-blue">
                    <div className="grid-container">
                        <Section
                            title="Billing Information"
                            className="container"
                        >
                            <div className="columns">
                                <div className="column is-half">
                                    <strong>LabZone s.r.o.</strong>
                                    <p>
                                        <br />
                                        Liptovská 2708/6
                                        <br />
                                        911 08 Trenčín
                                        <br />
                                        Slovakia
                                    </p>
                                </div>
                                <div className="column is-half">
                                    <p className="mt-3">
                                        <FormattedMessage
                                            id="companyID"
                                            defaultMessage="Business ID"
                                        />
                                        : 50753681
                                        <br />
                                        <FormattedMessage
                                            id="taxID"
                                            defaultMessage="Tax ID"
                                        />
                                        : 2120461266
                                        <br />
                                        <FormattedMessage
                                            id="vatID"
                                            defaultMessage="VAT ID"
                                        />
                                        : SK 2120461266
                                        <br />
                                        Company is registered in the Business
                                        Register of the District Court Trenčín,
                                        Section: Sro, Insert No.: 40402/R
                                    </p>
                                </div>
                            </div>
                        </Section>
                    </div>
                </FullBleed>
            </Layout>
        </>
    )
}
