import React from "react"

/** Gatsby */
import { graphql } from 'gatsby'

/** Components */
import Layout from "../components/layout"
import Hero from "../components/hero"
import Section from "../components/section"
import FullBleed from "../components/fullBleed"
import Spacer from "../components/spacer"

import Icon from "../components/icon"

import ProjectsList from "../components/project/projectsList"
import { color } from "../utils/color"

export default function Home({ data }) {

  const projects = data.allMongodbLabzoneSiteProjects.edges;

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
            <Icon source="/images/icons/svg/seo.svg" size="lg" />
            <h3 className="has-text-weight-bold mb-3">Software Development</h3>
            <ul>
              <li>Web sites / apps</li>
              <li>E-commerce</li>
              <li>Mobile applications</li>
            </ul>
          </div>
          <div className="column has-text-centered">
            <Icon source="/images/icons/svg/seo.svg" size="lg" />
            <h3 className="has-text-weight-bold mb-3">UX / UI Desgin</h3>
            <ul>
              <li>User eXperience</li>
              <li>User Interface</li>
            </ul>
          </div>
          <div className="column has-text-centered">
            <Icon source="/images/icons/svg/seo.svg" size="lg" />
            <h3 className="has-text-weight-bold mb-3">SEO</h3>
            <ul>
              <li>Search Engine Optimisation</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div className="column has-text-centered">
            <Icon source="/images/icons/svg/seo.svg" size="lg" />
            <h3 className="has-text-weight-bold mb-3">Marketing Support</h3>
            <ul>
              <li>On-line / Off-line</li>
              <li>Newsletters</li>
              <li>Banners</li>
            </ul>
          </div>
        </div>
      </Section>

      <FullBleed color={color.dark}>
        <div className="grid-container">
          <Section title="Technologies we use">
            <p>Lorem Ipsum</p>
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
