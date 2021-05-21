import React from "react"

import Intro from "../components/organic-wines/Intro"
import SEO from "../components/seo"
import Layout from "../components/shared/layout/layout"

const OrganicWines = () => {
  return (
    <Layout padding>
      <SEO title="Vinos Orgánicos" />
      <Intro />
    </Layout>
  )
}

export default OrganicWines
