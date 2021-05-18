import React from "react"

import SEO from "../components/seo"
import Layout from "../components/shared/layout/layout"
import Philosophy from "../components/about-us/Philosophy"

const AboutUs = () => {
  return (
    <Layout padding>
      <SEO title="Buono" />
      <Philosophy />
    </Layout>
  )
}

export default AboutUs
