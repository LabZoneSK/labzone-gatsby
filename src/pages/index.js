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

import Card from "../components/card"
import Icon from "../components/icon"

import ProjectsList from "../components/project/projectsList"
import { color } from "../utils/color"

const HeaderWithBottomLine = styled.h3`
  &:after {
    content: " ";
    display: block;
    height: 0.1rem;
    background-color: #fff;
    width: 50px;

    position: relative;
    left: calc(50% - 25px);
    top: 0.5rem;
  }
`

export default function Home({ data }) {
  const projects = data.allMongodbLabzoneSiteProjects.edges

  return (
    <Layout>
      <FullBleed>
        <Hero
          title="We build virtual teams<br/>for your real success."
          subtitle="Using code, design and almost any other IT tool<br/>to solve your business challenges. Exclusively remote."
          image="/images/lead-image.jpg"
        />
      </FullBleed>

      <Section title="We can help you with">
        <div className="columns mt-5 mb-3">
          <div className="column has-text-centered">
            <Card>
              <Icon
                source="/images/icons/svg/labzone-software-development.svg"
                size="lg"
              />
              <HeaderWithBottomLine className="mb-3">Software Development</HeaderWithBottomLine>
              <ul>
                <li>Web sites / apps</li>
                <li>E-commerce</li>
                <li>Mobile applications</li>
              </ul>
            </Card>
          </div>
          <div className="column has-text-centered">
            <Card>
              <Icon
                source="/images/icons/svg/labzone-web-design.svg"
                size="lg"
              />
              <HeaderWithBottomLine className="mb-3">UX / UI Desgin</HeaderWithBottomLine>
              <ul>
                <li>User eXperience</li>
                <li>User Interface</li>
                <li>Copywritting</li>
              </ul>
            </Card>
          </div>

          <div className="column has-text-centered">
            <Card>
              <Icon
                source="/images/icons/svg/labzone-digital-marketing.svg"
                size="lg"
              />
              <HeaderWithBottomLine className="mb-3">SEO &amp; Marketing</HeaderWithBottomLine>
              <ul>
                <li>Banners</li>
                <li>Marketing Support</li>
                <li>On-line &amp; Off-line</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      <FullBleed color={color.dark}>
        <div className="grid-container">
          <Section title="Technologies we use">
            <p className="has-text-white">
              Our software speacilists will always adapt to your needs. Here are
              some of the technologies we work with:
            </p>
          </Section>
        </div>
      </FullBleed>

      <Section title="Some of our projects">
        <ProjectsList projects={projects} />
      </Section>

      <FullBleed>
        <Hero image="/images/community-home.jpg" isRounded>
          <Spacer
            title="We build community"
            subtitle="In addition to various passion projects, we strive to build a solid
          community around design and information technology."
          />
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
  }
`
