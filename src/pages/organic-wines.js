import React from "react"
import styled from "styled-components"

import Intro from "../components/organic-wines/Intro"
import SEO from "../components/seo"
import Layout from "../components/shared/layout/layout"

const OrganicWines = () => {
  return (
    <Layout>
      <SEO title="Buono" />
      <OrganicWinesContainer>
        <Intro />
      </OrganicWinesContainer>
    </Layout>
  )
}

export default OrganicWines

const OrganicWinesContainer = styled.div`
  padding-top: 120px;
`
