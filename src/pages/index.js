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

export default function Home({ data }) {
  const projects = data.allPrismicProject.edges
  const posts = data.allPrismicPost.edges

  const technologies = data.allFile.edges

  const services = [
    {
      title: "Software Development",
      icon: "/images/icons/svg/labzone-software-development.svg",
      list: ["Web sites / apps", "E-commerce", "Mobile applications"],
    },
    {
      title: "UX / UI Desgin",
      icon: "/images/icons/svg/labzone-web-design.svg",
      list: ["User eXperience", "User Interface", "Copywritting"],
    },
    {
      title: "SEO & Marketing",
      icon: "/images/icons/svg/labzone-digital-marketing.svg",
      list: ["Banners", "Marketing Support", "On-line & Off-line"],
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
    <Layout hasLastDark>
      <SeoHelmet
        title="We build virtual teams"
        description="Using code, design and almost any other IT tool<br/>to solve your business challenges. Exclusively remote."
        schemaOrgJSONLD={getOrganizationData()}
      />

      <FullBleed>
        <Hero
          title="We build <span class=text-red-pigment>virtual teams</span><br/>for your real success"
          subtitle="Using code, design and almost any other IT tool<br/>to solve your business challenges. <span class=text-red-pigment>Exclusively remote.</span>"
          image="lead-v1.jpg"
        />
      </FullBleed>

      <Section title="We can help you with">
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

      <FullBleed color='dark'>
        <div className="grid-container">
          <Section title="Technologies we use" titleClass="text-red-pigment">
            <p className="has-text-white">
              Our software speacilists will always adapt to your needs. Here are
              some of the technologies we work with:
            </p>

            <TechIcons>
              {technologies &&
                technologies.map((technnologyIcon, i) => {
                  return (
                    <Icon
                      key={i}
                      source={technnologyIcon.node.relativePath}
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

      <Section title="Some of our projects">
        <ProjectsList projects={projects} hasShowMore />
      </Section>

      <FullBleed>
        <Hero image="community-labzone.jpg" isRounded>
          <Spacer
            title="We build community"
            subtitle="In addition to various passion projects, we strive to build a solid
          community around design and information technology."
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
                      View repos
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
                      Join to Discord
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
                  View repos
                </a>
              </div>
              <div className="mt-3">
                <a
                  href="https://discord.gg/XmBm8K9"
                  className="has-text-white is-size-5"
                >
                  <Discord className="social-icon social-icon--line-centered p-0 mr-3" />
                  Join to Discord
                </a>
              </div>
            </div>
          </Spacer>
        </Hero>
      </FullBleed>

      <Section title="The LabZone Blog">
        <PostsList posts={posts} />
      </Section>

      <FullBleed color="apricot">
        <div className="grid-container">
          <Section title="Connect with us" className="container">
            <div className="columns">
              <div className="column is-half">
                Got questions?
                <br />
                Contact us directly at info@labzone.sk
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
    allPrismicProject {
      edges {
        node {
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

    allPrismicPost(limit: 3) {
      edges {
        node {
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
