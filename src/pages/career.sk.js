import React from 'react'

/** Gatsby */
import { graphql } from 'gatsby'

/** Components */
import Layout from '../components/layout'
import JobsList from '../components/career/jobsList'
import Section from '../components/section'
import SeoHelmet from '../components/seo/seoHelmet'

export default function Career({ data, location }) {
    const jobs = data.allPrismicJoboffer.edges

    return (
        <>
            <SeoHelmet
                title={`Kariéra`}
                description="Staňte sa súčasťou nášho tímu."
            />

            <Layout location={location}>
                <Section title="Rastite s nami">
                    <p className="is-size-5 mb-5">
                        V Labzone budujeme komunitnú kultúru developerov, v
                        ktorej môžu talentovaní ľudia ako Vy robiť najlepšiu
                        prácu. Ak ste pripravení naštartovať svoju kariéru a
                        pomôcť zažiariť popredným organizáciám v EÚ, ste na
                        správnom mieste.
                    </p>
                    <h2 className="list-title">Voľné pracovné pozície</h2>
                    <JobsList jobs={jobs} />
                </Section>

                <Section title="Nevidíte vhodnú pozíciu?" className="container">
                    <p>
                        Myslíte si, že by ste sa hodili do LabZone, ale nenašli
                        ste vhodnú pozíciu? Vždy hľadáme nové talenty, tak sa
                        nám ozvite a spolu zistíme, či k nám zapadnete.
                    </p>

                    <div className="mt-6">
                        <a
                            className="lz-button button--isi"
                            href="/sk/contact/"
                        >
                            Kontaktovať LabZone
                        </a>
                    </div>
                </Section>
            </Layout>
        </>
    )
}

export const query = graphql`
    {
        allPrismicJoboffer(filter: { lang: { eq: "sk" } }) {
            edges {
                node {
                    data {
                        featuredimage {
                            alt
                            gatsbyImageData
                        }
                        role {
                            text
                        }
                        description {
                            text
                        }
                    }
                    uid
                    tags
                    lang
                }
            }
        }
    }
`
