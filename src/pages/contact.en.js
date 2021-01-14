import React from 'react'

/** Components */
import Layout from "../components/layout"
import Section from "../components/section"
import SeoHelmet from "../components/seo/seoHelmet"

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

      <Layout location={location}>
      <Section title="Connect with us" className="container">
            <div className="columns">
              <div className="column is-half">
                Got questions?
                <br />
                Contact us directly at info@labzone.sk
                <p className="mt-5">
                Or follow us to stay in touch
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
                  <br />
                  Slovakia
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
      </Layout>
    </>
    )
}
