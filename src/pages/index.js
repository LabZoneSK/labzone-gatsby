import React from "react"

import Layout from "../components/layout"
import Section from "../components/section"
import FullBleed from "../components/fullBleed"

export default function Home({ data }) {
  return <Layout>

    <FullBleed>
      <img src="images/lead-image.jpg" alt="" size="md"/>
    </FullBleed>

    <Section title='Výsledky našej práce'>
      COntent
    </Section>

    <Section title='Spojte sa s nami'>
      COntent
    </Section>
  </Layout>
}
