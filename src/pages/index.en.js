import React from 'react'

/** Gatsby */
import { Link, graphql } from 'gatsby'

/** Emotion & Styling */
import styled from '@emotion/styled'

/** Components */
import Layout from 'components/layout'
import Hero from 'components/hero'
import Section from 'components/section'
import FullBleed from 'components/fullBleed'
import Spacer from 'components/spacer'
import PostsList from 'components/blog/postsList'

import Card from 'components/card'
import Icon from 'components/icon'

import SeoHelmet from 'components/seo/seoHelmet'
import config from 'components/config'

import ProjectsList from 'components/project/projectsList'
import { device } from 'utils/device'
import { FormattedMessage } from 'react-intl'

import Client from 'components/client'

/** Icons */
import LinkedIn from 'images/svg/linkedin.inline.svg'
import Twitter from 'images/svg/twitter.inline.svg'
import Discord from 'images/svg/discord.inline.svg'
import Github from 'images/svg/github.inline.svg'

import { GENERAL_EMAIL } from 'common/constants'

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
            title: 'Software Development',
            icon: '/images/icons/svg/labzone-software-development.svg',
            list: ['Web sites / apps', 'E-commerce', 'Mobile applications'],
        },
        {
            title: 'UX / UI Desgin',
            icon: '/images/icons/svg/labzone-web-design.svg',
            list: ['User eXperience', 'User Interface', 'Copywritting'],
        },
        {
            title: 'SEO & Marketing',
            icon: '/images/icons/svg/labzone-digital-marketing.svg',
            list: ['Banners', 'Marketing Support', 'On-line & Off-line'],
        },
    ]

    const getOrganizationData = () => {
        return {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Trenčín, Slovakia',
                postalCode: '91108',
                streetAddress: 'Liptovská 2708/6',
            },
            email: 'info(at)labzone.sk',
            url: config.url,
            name: config.name,
            legalName: config.name,
            vatID: 'SK2120461266',
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+421-948-272-880',
                email: 'info(at)labzone.sk',
                contactType: 'General contact',
            },
        }
    }

    return (
        <Layout hasLastDark location={location}>
            <SeoHelmet
                title="We build virtual teams"
                description="Using code, design and almost any other IT tool<br/>to solve your business challenges. Exclusively remote."
                schemaOrgJSONLD={getOrganizationData()}
            />

            <FullBleed>
                <Hero
                    title="Custom Software Development for Startups and SMEs:<br/><span class='block mt-3 bg-gradient-to-r from-[#ff1d25] to-[#ED213A] bg-clip-text text-transparent'>Building Virtual Teams for Real Success.</span>"
                    subtitle="Using code, design and almost any other IT tool<br/>to solve your business challenges. <span class=text-red-pigment>Exclusively remote.</span>"
                    image="lead-v1.jpg"
                />
            </FullBleed>

            <Section title="How we can help you">
                <div className="columns mt-5 mb-3">
                    {services &&
                        services.map((service, i) => {
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

            <FullBleed color="dark">
                <div className="grid-container">
                    <Section
                        title="Technologies we use"
                        titleClass="!text-white"
                    >
                        <p className="has-text-white">
                            Our software speacilists will always adapt to your
                            needs. Here are some of the technologies we work
                            with:
                        </p>

                        <TechIcons>
                            {technologies &&
                                technologies.map((technnologyIcon, i) => {
                                    return (
                                        <Icon
                                            key={i}
                                            source={
                                                technnologyIcon.node
                                                    .relativePath
                                            }
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

            <Section titleClass="mt-6" title="Some of our projects">
                <ProjectsList projects={projects} hasShowMore />
            </Section>

            <FullBleed color="spacer">
                <div className="grid-container">
                    <Section titleClass="mt-6" title="Some of clients">
                        <div className="clients columns is-multiline is-mobile my-6 is-vcentered">
                            <Client
                                logo="images/clients/majolika-SLM-logo.png"
                                alt="SLM logo"
                            />
                            <Client
                                logo="images/clients/salusfin-logo.png"
                                alt="Salusfin logo"
                            />
                            <Client
                                logo="images/clients/cvti-sr-logo.png"
                                alt="CVTI SR logo"
                            />
                            <Client
                                logo="images/clients/qex-logo.png"
                                alt="QEX a.s. logo"
                            />
                            <Client
                                logo="images/clients/jedenrodic-logo.png"
                                alt="Jedenrodic n.o. logo"
                            />
                            <Client
                                logo="images/clients/bait-logo.svg"
                                alt="BAIT s.r.o. logo"
                            />
                            <Client
                                logo="images/clients/asbis-logo.png"
                                alt="ASBIS SK logo"
                            />
                        </div>
                    </Section>
                </div>
            </FullBleed>

            <FullBleed>
                <Hero image="community-labzone.jpg">
                    <Spacer
                        title="We build community"
                        subtitle="In addition to various passion projects, we strive to build a solid
          community around design and information technology."
                    >
                        <div className="is-hidden-mobile">
                            <div className="is-pulled-right">
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

            <Section title="Latest Blog Posts">
                <PostsList posts={posts} />
            </Section>

            <FullBleed color="columbia-blue">
                <div className="grid-container">
                    <Section title="Connect with us" className="container">
                        <div className="columns">
                            <div className="column is-full-mobile is-half-tablet is-clearfix">
                                Got questions?
                                <br />
                                <div className="mt-1">
                                    Contact us directly at {GENERAL_EMAIL}
                                </div>
                                <div className="mt-5">
                                    <Link
                                        className="lz-button lz-button--border-thin button--isi button--isi--inverted"
                                        to={`/contact/`}
                                    >
                                        <FormattedMessage
                                            id="contactForm"
                                            defaultMessage="Contact Form"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="column is-full-mobile is-half-tablet">
                                Or follow us to stay in touch
                                <br />
                                <div className="mt-1">
                                    <a href="https://www.linkedin.com/company/labzonesk">
                                        <LinkedIn className="social-icon linkedin" />
                                        <span className="is-sr-only">
                                            Link to LabZone LinkedIn page
                                        </span>
                                    </a>
                                    <a href="https://twitter.com/LabZoneSK">
                                        <Twitter className="social-icon twitter" />
                                        <span className="is-sr-only">
                                            Link to LabZone Twitter profile
                                        </span>
                                    </a>
                                </div>
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
        allPrismicProject(
            filter: { lang: { eq: "en" } }
            limit: 3
            sort: { fields: [last_publication_date], order: [DESC] }
        ) {
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
                            gatsbyImageData
                        }
                    }
                }
            }
        }

        allPrismicPost(
            filter: { lang: { eq: "en" } }
            limit: 3
            sort: { fields: [last_publication_date], order: [DESC] }
        ) {
            edges {
                node {
                    lang
                    data {
                        hero_image {
                            alt
                            gatsbyImageData
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
