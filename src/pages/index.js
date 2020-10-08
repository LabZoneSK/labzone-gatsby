import React from 'react'

/** Gatsby */
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import Header from '../components/header'
import Layout from '../components/layout'

export default function Home ({ data }) {
  return (
    <Layout>
      <div className='full-bleed'>
        <img src='https://source.unsplash.com/random' alt='' />
      </div>
      <Header headerText={data.site.siteMetadata.title} />
      <p>What a beautiful world.</p>

      
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
