import React from "react"

/** Gatsby */
import { graphql } from "gatsby"

/** Components */
import Layout from "../components/layout"
import Hero from "../components/hero"
import Section from "../components/section"
import FullBleed from "../components/fullBleed"
import Spacer from "../components/spacer"

import Card from "../components/card"
import Icon from "../components/icon"

import SeoHelmet from "../components/seo/seoHelmet"

import ProjectsList from "../components/project/projectsList"
import { color } from "../utils/color"

export default function Home({ data }) {
  const projects = data.allMongodbLabzoneSiteProjects.edges

  const technologies = data.allFile.edges

  const services = [
    {
      title: "Software Development",
      icon: "/images/icons/svg/labzone-software-development.svg",
      list: [
        "Web sites / apps",
        "E-commerce",
        "Mobile applications"
      ]
    },
    {
      title: "UX / UI Desgin",
      icon: "/images/icons/svg/labzone-web-design.svg",
      list: [
        "User eXperience",
        "User Interface",
        "Copywritting"
      ]
    },
    {
      title: "SEO & Marketing",
      icon: "/images/icons/svg/labzone-digital-marketing.svg",
      list: [
        "Banners",
        "Marketing Support",
        "On-line & Off-line"
      ]
    }
  ]

  return (
    <Layout>
      <SeoHelmet
        title="We build virtual teams"
        description="Using code, design and almost any other IT tool<br/>to solve your business challenges. Exclusively remote."
      />

      <FullBleed>
        <Hero
          title="We build virtual teams<br/>for your real success."
          subtitle="Using code, design and almost any other IT tool<br/>to solve your business challenges. Exclusively remote."
          image="lead-image.jpg"
        />
      </FullBleed>

      <Section title="We can help you with">
        <div className="columns mt-5 mb-3">

          {services &&
            services.map((service,i) => {
              return (
                <div 
                  className="column has-text-centered"
                  key={i}
                >
                  <Card service={service} />
                </div>
              )
            })}
        </div>
      </Section>

      <FullBleed color={color.dark}>
        <div className="grid-container">
          <Section title="Technologies we use">
            <p className="has-text-white">
              Our software speacilists will always adapt to your needs. Here are
              some of the technologies we work with:
            </p>

            <div className="columns is-multiline mt-5 is-mobile">
              {technologies &&
                technologies.map((technnologyIcon,i) => {
                  return (
                    <div 
                      className="column is-one-third-mobile is-one-fifth-desktop"
                      key={i}
                    >
                      <Icon
                        source={technnologyIcon.node.relativePath}
                        alt=""
                        size="md"
                        isWhite
                      />
                    </div>
                  )
                })}
            </div>
          </Section>
        </div>
      </FullBleed>

      <Section title="Some of our projects">
        <ProjectsList projects={projects} hasShowMore />
      </Section>

      <FullBleed>
        <Hero image="community-home.jpg" isRounded>
          <Spacer
            title="We build community"
            subtitle="In addition to various passion projects, we strive to build a solid
          community around design and information technology."
          >
            <div className="mt-3 is-pulled-right">
              <div className="columns is-vcentered">
                <div className="column is-one-fifth">
                  <Icon source="/images/icons/github.svg" size="md" />
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
                  <Icon source="/images/icons/discord.svg" size="md" />
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
          </Spacer>
        </Hero>
      </FullBleed>

      <Section title="Connect with us" className="container">
        <div className="columns">
          <div className="column is-half">
            Got questions?
            <br />
            Contact us directly at info@labzone.sk
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
    </Layout>
  )
}

export const query = graphql`
  {
    allMongodbLabzoneSiteProjects {
      edges {
        node {
          technologies
          name
          description
          featured
          slug
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
