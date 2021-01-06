import React from "react"

/** Gatsby */
import { graphql } from "gatsby"
import Img from "gatsby-image"

/** Components */
import Layout from "../components/layout"
import Section from "../components/section"
import Content from "../components/content"
import Icon from "../components/icon"
import Gallery from "../components/gallery"
import Blockquote from "../components/blockquote"
import Center from "../components/center"
import FullBleed from "../components/fullBleed"

import SeoHelmet from "../components/seo/seoHelmet"

import { FormattedMessage } from "react-intl"

/** Prismic */
import { RichText } from "prismic-reactjs"

export default function ProjectDetail({ data, location }) {
  const {
    project_title,
    project_summary,
    result,
    assignment,
    featured_image,
    technologies,
    team,
    testimonials,
    call_to_action,
  } = data.prismicProject.data
  const lang = data.prismicProject.lang

  const usedTechnologies = technologies.text.split(",")
  const icons = usedTechnologies.map(technology => {
    return (
      <Icon
        source={`/images/technologies/${technology.toLowerCase().trim()}.svg`}
        size="sm"
        alt={technology}
        isWhite
      />
    )
  })

  let galleryImages = []
  if (
    data.prismicProject.data &&
    data.prismicProject.data.body[0] &&
    data.prismicProject.data.body[0].items
  ) {
    galleryImages = data.prismicProject.data.body[0].items
  }

  return (
    <>
      <SeoHelmet
        title={`${project_title.text}`}
        description={project_summary.text}
        image={featured_image.fluid.src}
        lang={lang}
      />

      <Layout location={location}>
        <FullBleed color="dark">
          <div className="grid-container">
            <div className="content-section">
              <h1 className="project--title">{project_title.text}</h1>
            </div>
          </div>
        </FullBleed>
        <Section>
          <div className="columns is-flex is-flex-direction-column-reverse-mobile">
            <div className="column">
              {assignment && (
                <Content
                  title={
                    <FormattedMessage id="summary" defaultMessage="Summary" />
                  }
                  content={project_summary.html}
                />
              )}
            </div>
            <div className="column project--summary-image">
              <Img fluid={featured_image.fluid} alt="" />
            </div>
          </div>

          {testimonials &&
            testimonials[0] &&
            testimonials[0].blockquote &&
            testimonials[0].blockquote.text.length > 0 && (
              <Blockquote
                image={testimonials[0].testimonial_image}
                quote={testimonials[0].blockquote.text}
                footer={testimonials[0].footer.text}
              />
            )}

          {assignment && (
            <Content
              title={
                <FormattedMessage
                  id="challange"
                  defaultMessage="The challenge"
                />
              }
              content={assignment.html}
            />
          )}
        </Section>
        <FullBleed color="red-shade1">
          <div className="grid-container is-dark">
            <div className="content-section">
              <div className="columns">
                <div className="column">
                  {team && (
                    <>
                      <h2 className="has-text-white has-text-weight-bold is-size-5">
                        <FormattedMessage id="team" defaultMessage="Team" />
                      </h2>
                      <div
                        className="has-text-white"
                        dangerouslySetInnerHTML={{
                          __html: team.html,
                        }}
                      />
                    </>
                  )}
                </div>
                <div className="column">
                  {technologies && (
                    <>
                      <h2 className="has-text-white has-text-weight-bold is-size-5">
                        <FormattedMessage
                          id="technologiesStack"
                          defaultMessage="Technologies Stack"
                        />
                      </h2>
                      <div className="project--icons">{icons}</div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </FullBleed>
        <Section>
          {result && (
            <Content
              title={
                <FormattedMessage id="solution" defaultMessage="Our solution" />
              }
              content={result.html}
            />
          )}

          <Gallery images={galleryImages} />

          {call_to_action && call_to_action[0] && (
            <Center>
              <div className="mt-6 has-text-centered is-size-5">
                <RichText render={call_to_action[0].cta_description.raw} />

                <div className="mt-6 center">
                  <a className="lz-button button--isi" href={call_to_action[0].cta_link.url}>
                    {call_to_action[0].cta_button_text.text}
                  </a>
                </div>
              </div>
            </Center>
          )}
        </Section>
      </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    prismicProject(data: { slug: { text: { eq: $slug } } }) {
      id
      lang
      data {
        featured_image {
          fluid(maxWidth: 400, maxHeight: 300) {
            ...GatsbyPrismicImageFluid
          }
        }
        call_to_action {
          cta_button_text {
            text
          }
          cta_description {
            raw
          }
          cta_link {
            url
          }
        }
        project_summary {
          text
          html
        }
        project_title {
          text
        }
        result {
          html
        }
        assignment {
          html
        }
        technologies {
          text
        }
        team {
          html
        }
        testimonials {
          blockquote {
            text
          }
          footer {
            text
          }
          testimonial_image {
            fluid(maxWidth: 400, maxHeight: 300) {
              ...GatsbyPrismicImageFluid
            }
          }
        }
        body {
          ... on PrismicProjectBodyImageGallery {
            id
            items {
              caption {
                text
              }
              alt_text {
                text
              }
              image {
                fluid(maxWidth: 400, maxHeight: 300) {
                  ...GatsbyPrismicImageFluid
                }
              }
            }
          }
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
