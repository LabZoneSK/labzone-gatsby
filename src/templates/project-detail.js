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
import ContactUs from "../components/contactUs"

import SeoHelmet from "../components/seo/seoHelmet"

import { FormattedMessage } from "react-intl"

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
  } = data.prismicProject.data

  const usedTechnologies = technologies.text.split(",")
  const icons = usedTechnologies.map(technology => {
    return (
      <Icon
        source={`/images/technologies/${technology.toLowerCase().trim()}.svg`}
        size="sm"
        alt={technology}
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
      />

      <Layout location={location}>
        <Section title={project_title.text}>
          <div className="columns">
            <div className="column">
              {assignment && (
                <Content title={<FormattedMessage id="summary" defaultMessage="Summary" />} content={project_summary.html} />
              )}
            </div>
            <div className="column">
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
            <Content title={<FormattedMessage id="assignment" defaultMessage="Assingment" />} content={assignment.html} />
          )}

          <div className="columns">
            <div className="column">
              {team && (
                <Content
                  title={<FormattedMessage id="team" defaultMessage="Team" />}
                  content={team.html}
                  customClasses="person"
                />
              )}
            </div>
            <div className="column">
              {technologies && (
                <Content title={<FormattedMessage id="technologiesStack" defaultMessage="Technologies Stack" />}>{icons}</Content>
              )}
            </div>
          </div>
          {result && <Content title={<FormattedMessage id="result" defaultMessage="Result" />} content={result.html} />}

          <Gallery images={galleryImages} />

          <ContactUs hasLinkToPortfolio="Show me other projects" />
        </Section>
      </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    prismicProject(data: { slug: { text: { eq: $slug } } }) {
      id
      data {
        featured_image {
          fluid(maxWidth: 400, maxHeight: 300) {
            ...GatsbyPrismicImageFluid
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
