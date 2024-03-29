import React from "react"

/** Components */
import Layout from "../components/layout"
import Section from "../components/section"
import FullBleed from "../components/fullBleed"
import SeoHelmet from "../components/seo/seoHelmet"
import ContactForm from "../components/contactForm"

import { FormattedMessage } from "react-intl"

/** Icons */
import LinkedIn from "../images/svg/linkedin.inline.svg"
import Twitter from "../images/svg/twitter.inline.svg"

import { GENERAL_EMAIL } from "common/constants";

export default function ContactEn({ location }) {
  return (
    <>
      <SeoHelmet
        title={`Kontaktujte nás`}
        description="Máte otázky? Spojte sa s nami. Stránka s kontaktnými a fakturačnými údajmi."
      />

      <Layout location={location} hasLastDark>
        <Section className="container">
          <h1 className="section-title has-text-centered-mobile ">
            Spojte sa s nami
          </h1>
          <p>
            Prosím, pošlite e-mail na{" "}
            <a href={`mailto:${GENERAL_EMAIL}`}>{ GENERAL_EMAIL}</a> alebo vyplňte
            kontaktný formulár nižšie.
            <br /> <b>Odpovieme Vám do 48 hodín</b> - okrem víkendov.
          </p>
          <div className="columns is-vcentered">
            <div className="column is-half pt-6">
              <ContactForm />
            </div>

            <div className="column is-half has-text-centered">
              <p className="mt-5">
                <strong>{ GENERAL_EMAIL}</strong>
                <br />
                +421 948 272 880
                <br />
                <br />
                <br />
                Zostaňme v kontakte
              </p>
              <div className="mt-1">
                <a href="https://www.linkedin.com/company/labzonesk">
                <LinkedIn className="social-icon linkedin" /><span className="is-sr-only">Odkaz na LabZone LinkedIn stránku</span>
                </a>
                <a href="https://twitter.com/LabZoneSK">
                <Twitter className="social-icon twitter" /><span className="is-sr-only">Odkaz na LabZone Twitter účet</span>
                </a>
              </div>
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
                    <FormattedMessage
                      id="companyID"
                      defaultMessage="Business ID"
                    />
                    : 50753681
                    <br />
                    <FormattedMessage id="taxID" defaultMessage="Tax ID" />:
                    2120461266
                    <br />
                    <FormattedMessage id="vatID" defaultMessage="VAT ID" />: SK
                    2120461266
                    <br />
                    Spoločnosť zapísaná v Obchodnom registry Okresného súdu v
                    Trenčíne, Oddiel: Sro, vložka číslo 40402/R
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
