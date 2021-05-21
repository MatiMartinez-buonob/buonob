import React from "react"

import SEO from "../components/seo"
import Layout from "../components/shared/layout/layout"
import Philosophy from "../components/about-us/Philosophy"
import History from "../components/about-us/History"
import Vineyard from "../components/about-us/Vineyard"
import Cellar from "../components/about-us/Cellar"
import FinalLine from "../components/common/FinalLine"

const AboutUs = () => {
  return (
    <Layout padding>
      <SEO title="Nosotros" />
      <Philosophy />
      <History />
      <Vineyard />
      <Cellar />
      <FinalLine />
    </Layout>
  )
}

export default AboutUs
