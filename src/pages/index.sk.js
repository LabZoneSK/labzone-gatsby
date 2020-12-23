import React from "react"

/** Gatsby */
import { graphql } from "gatsby"

/** Emotion & Styling */
import styled from "@emotion/styled"

/** Components */
import Layout from "../components/layout"
import Hero from "../components/hero"
import Section from "../components/section"
import FullBleed from "../components/fullBleed"
import Spacer from "../components/spacer"
import PostsList from "../components/blog/postsList"

import Card from "../components/card"
import Icon from "../components/icon"

import SeoHelmet from "../components/seo/seoHelmet"
import config from "../components/config"

import ProjectsList from "../components/project/projectsList"
import { FormattedMessage } from "react-intl"
import { color } from "../utils/color"
import { device } from "../utils/device"

/** Icons */
import LinkedIn from "../images/svg/linkedin.inline.svg"
import Twitter from "../images/svg/twitter.inline.svg"
import Discord from "../images/svg/discord.inline.svg"
import Github from "../images/svg/github.inline.svg"

const TechIcons = styled.div`
  padding-top: 40px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);

  @media ${device.tablet} {
    grid-template-columns: repeat(5, 1fr);
  }

  > img {
    opacity: 0.8;
    transition: 0.2s opacity;

    &:hover {
      opacity: 1;
    }
  }
`

export default function Home({ data, location }) {
  const projects = data.allPrismicProject.edges
  const posts = data.allPrismicPost.edges

  const technologies = data.allFile.edges

  const services = [
    {
      title: "Vývoj softvéru",
      icon: "/images/icons/svg/labzone-software-development.svg",
      list: ["Web stránky / aplikácie", "E-commerce", "Mobilné aplikácie"],
    },
    {
      title: "UX / UI dizajn",
      icon: "/images/icons/svg/labzone-web-design.svg",
      list: ["Užívateľský zážitok (UX)", "Grafické rozhranie / dizajn", "Copywriting"],
    },
    {
      title: "SEO & Marketing",
      icon: "/images/icons/svg/labzone-digital-marketing.svg",
      list: ["Banery", "Marketingová podpora", "On-line & Off-line"],
    },
  ]

  const getOrganizationData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Trenčín, Slovakia",
        postalCode: "91108",
        streetAddress: "Liptovská 2708/6",
      },
      email: "info(at)labzone.sk",
      url: config.url,
      name: config.name,
      legalName: config.name,
      vatID: "SK2120461266",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+421-948-272-880",
        email: "info(at)labzone.sk",
        contactType: "General contact",
      },
    }
  }

  return (
    <Layout hasLastDark location={location}>
      <SeoHelmet
        title="Budujeme virtuálne softvérové tímy"
        description="Pomocou kódu, dizajnu a takmer ľubovoľného iného IT nástroja s nami vyriešite svoje obchodné potreby. Exkluzívne remote."
        schemaOrgJSONLD={getOrganizationData()}
        lang="sk"
      />

      <FullBleed>
        <Hero
          title="Virtuálne tímy<br/>pre váš reálny úspech."
          subtitle="Každé zadanie je jedinečné a pod palcom ho vždy majú naši najpovolanejší.<br>Používame overené technológie, ktoré v kombinácii s našim know-how garantujú top výsledok."
          image="lead-image.jpg"
        />
      </FullBleed>

      <Section title="S čím vám vieme pomôcť">
        <div className="columns mt-5 mb-3">
          {services &&
            services.map((service, i) => {
              return (
                <div className="column has-text-centered" key={i}>
                  <Card service={service} />
                </div>
              )
            })}
        </div>
      </Section>

      <FullBleed color={color.dark}>
        <div className="grid-container">
          <Section title="Používame najmodernejšie technológie">
            <p className="has-text-white">
            Náši špecialisti sa vždy prispôsobia vašim potrebám. Toto sú niektoré z technológií, s ktorými pracujeme:
            </p>

            <TechIcons>
              {technologies &&
                technologies.map((technnologyIcon, i) => {
                  return (
                    <Icon
                      key={i}
                      source={`/${technnologyIcon.node.relativePath}`}
                      alt=""
                      size="md"
                      isWhite
                    />
                  )
                })}
            </TechIcons>
          </Section>
        </div>
      </FullBleed>

      <Section title="Výsledky našej práce">
        <ProjectsList projects={projects} hasShowMore />
      </Section>

      <FullBleed>
        <Hero image="community-home.jpg" isRounded>
          <Spacer
            title="Budujeme komunitu"
            subtitle="Okrem rôznych passion projektov sa snažíme budovať solídnu komunitu okolo dizajnu a informčných technológií."
          >
            <div className="is-hidden-mobile">
              <div className="mt-3 is-pulled-right">
                <div className="columns is-vcentered">
                  <div className="column is-one-fifth">
                    <Github className="p-4" />
                  </div>
                  <div className="column pt-1">
                    <a
                      href="https://github.com/LabZoneSK"
                      className="has-text-white is-size-5"
                    >
                      Pozrieť si repozitáre
                    </a>
                  </div>
                </div>

                <div className="columns is-vcentered">
                  <div className="column is-one-fifth">
                    <Discord className="p-4" />
                  </div>
                  <div className="column pt-1">
                    <a
                      href="https://discord.gg/XmBm8K9"
                      className="has-text-white is-size-5"
                    >
                      Pridať sa na Discord
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="is-hidden-tablet">
              <div className="is-vcentered">
                <a
                  href="https://github.com/LabZoneSK"
                  className="has-text-white is-size-5"
                >
                  <Github className="social-icon social-icon--line-centered p-0 mr-3" />
                  Pozrieť si repozitáre
                </a>
              </div>
              <div className="mt-3">
                <a
                  href="https://discord.gg/XmBm8K9"
                  className="has-text-white is-size-5"
                >
                  <Discord className="social-icon social-icon--line-centered p-0 mr-3" />
                  Pridať sa na Discord
                </a>
              </div>
            </div>
          </Spacer>
        </Hero>
      </FullBleed>

      <Section title="Blog">
        <PostsList posts={posts} />
      </Section>

      <FullBleed color="#f4f4f4">
        <div className="grid-container">
          <Section title="Spojme sa" className="container">
            <div className="columns">
              <div className="column is-half">
                <FormattedMessage
                  id="gotQuestions"
                  defaultMessage="Got questions?"
                />
                <br />
                <FormattedMessage
                  id="contactUs"
                  defaultMessage="Contact us directly at {email}"
                  values={{ email: "info@labzone.sk" }}
                />
                <div className="mt-1">
                  <a href="https://www.linkedin.com/company/labzonesk">
                    <LinkedIn className="social-icon linkedin" />
                  </a>
                  <a href="https://twitter.com/LabZoneSK">
                    <Twitter className="social-icon twitter" />
                  </a>
                </div>
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
        </div>
      </FullBleed>
    </Layout>
  )
}

export const query = graphql`
  {
    allPrismicProject(filter: {lang: {eq: "sk"}}, limit: 3) {
      edges {
        node {
          lang
          data {
            project_title {
              text
            }
            slug {
              text
            }
            project_summary {
              html
            }
            featured_image {
              fluid(maxWidth: 400, maxHeight: 300) {
                ...GatsbyPrismicImageFluid
              }
            }
          }
        }
      }
    }

    allPrismicPost(filter: {lang: {eq: "sk"}}, limit: 3) {
      edges {
        node {
          lang
          data {
            hero_image {
              alt
              fluid(maxHeight: 400) {
                ...GatsbyPrismicImageFluid
              }
            }
            title {
              text
            }
            summary {
              text
            }
          }
          uid
          tags
        }
      }
    }

    allFile(filter: { relativeDirectory: { eq: "images/technologies" } }) {
      edges {
        node {
          relativePath
        }
      }
    }
  }
`
