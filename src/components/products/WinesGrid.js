import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import WineCard from "./WineCard"

const WinesGrid = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { relativeDirectory: { eq: "wines" } }) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <Container>
      {data.images.nodes.map((item, index) => (
        <WineCard item={item} key={index} />
      ))}
    </Container>
  )
}

export default WinesGrid

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
`
