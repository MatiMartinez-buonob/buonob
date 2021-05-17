import React from "react"
import styled from "styled-components"

import SEO from "../components/seo"
import Layout from "../components/shared/layout/layout"
import Intro from "../components/about-us/Intro"
import History from "../components/about-us/History"

const AboutUs = () => {
  return (
    <Layout>
      <SEO title="Buono" />
      <AboutUsContainer>
        <Intro />
        <History />
      </AboutUsContainer>
    </Layout>
  )
}

export default AboutUs

const AboutUsContainer = styled.div`
  padding-top: 120px;
`
