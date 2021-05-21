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
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  }
`
