import React from "react"

import Intro from "../components/organic-wines/Intro"
import SEO from "../components/seo"
import Layout from "../components/shared/layout/layout"

const OrganicWines = () => {
  return (
    <Layout padding>
      <SEO title="Buono" />
      <Intro />
    </Layout>
  )
}

export default OrganicWines
