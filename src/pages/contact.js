import React from "react"
import styled from "styled-components"

import Header from "../components/contact/Header"
import Info from "../components/contact/Info"
import SEO from "../components/seo"
import Layout from "../components/shared/layout/layout"

const Contact = () => {
  return (
    <Layout padding>
      <SEO title="Contacto" />
      <Header />
      <Grid>
        <Info />
      </Grid>
    </Layout>
  )
}

export default Contact

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 4rem 8rem;
  grid-gap: 1rem;
`
