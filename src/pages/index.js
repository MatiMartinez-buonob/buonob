import React from "react"

import Layout from "../components/shared/layout/layout"
import SEO from "../components/seo"
import Hero from "../components/index/Hero"
import Presentation from "../components/index/Presentation"
import FinalLine from "../components/common/FinalLine"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Presentation />
    <FinalLine />
  </Layout>
)

export default IndexPage
