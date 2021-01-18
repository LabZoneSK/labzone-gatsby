import React from 'react'

/** Components */
import Layout from "../components/layout"
import Section from "../components/section"
import FullBleed from "../components/fullBleed"
import SeoHelmet from "../components/seo/seoHelmet"

import { FormattedMessage } from "react-intl"

/** Icons */
import LinkedIn from "../images/svg/linkedin.inline.svg"
import Twitter from "../images/svg/twitter.inline.svg"

export default function ContactEn({ location }) {
    return (
        <>
      <SeoHelmet
        title={`Contact us | LabZone`}
        description='Labzone teams have completed software development projects for clients from Slovakia, Czech Republic, and Finland.'
      />

      <Layout location={location} hasLastDark>
      <Section title="Spojte sa s nami" className="container">
            <div className="columns">
              <div className="column is-half">
                Máte otázky?
                <br />
                Kontaktujte nás priamo na info@labzone.sk
                <p className="mt-5">
                Zostaňme v kontakte:
                <br />
                <div className="mt-1">
                  <a href="https://www.linkedin.com/company/labzonesk">
                    <LinkedIn className="social-icon linkedin" />
                  </a>
                  <a href="https://twitter.com/LabZoneSK">
                    <Twitter className="social-icon twitter" />
                  </a>
                </div>
                </p>
              </div>
              <div className="column is-half">
                <strong>LabZone s.r.o.</strong>
                <p>
                  <br />
                  Liptovská 2708/6
                  <br />
                  911 08 Trenčín
                </p>

                <p className="mt-3">
                  IČO: 50753681
                  <br />
                  DIČ: 2120461266
                  <br />
                  IČ DPH: SK2120461266
                </p>
              </div>
            </div>
          </Section>

          <FullBleed color="columbia-blue">
          <div className="grid-container">
            <Section title="Fakturačné údaje" className="container">
              <div className="columns">
                <div className="column is-half">
                  <strong>LabZone s.r.o.</strong>
                  <p>
                    <br />
                    Liptovská 2708/6
                    <br />
                    911 08 Trenčín
                    <br />
                    Slovensko
                  </p>
                </div>
                <div className="column is-half">
                  <p className="mt-3">
                    <FormattedMessage id="companyID" defaultMessage="Business ID" />: 50753681
                    <br />
                    <FormattedMessage id="taxID" defaultMessage="Tax ID" />: 2120461266
                    <br />
                    <FormattedMessage id="vatID" defaultMessage="VAT ID" />: SK 2120461266
                    <br/>
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
