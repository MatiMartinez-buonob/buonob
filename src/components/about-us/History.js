import React from "react"
import styled from "styled-components"

import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import InfoContent from "./InfoContent"

const History = () => {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Image fluid={data.bg.childImageSharp.fluid} />
      <InfoContent
        title="Historia"
        description="El siglo pasado fue testigo del nacimiento de dos personas en distintas
        islas del Mediterráneo: uno en Ischia, la otra en Sicilia. Estos jóvenes
        italianos emigraron a la Argentina y eligieron Mendoza como tierra para
        vivir y trabajar. Luego de algunos años Carmela y Benito se conocieron,
        para luego contraer matrimonio y así fundar una familia. De esto se
        trata esta historia, la de una casa: “Sancte Petre” donde habitan
        personas que forman una familia cuyos antecesores cultivaron la vid en
        Europa por varias generaciones y en Argentina desde el año 1949. De este
        matrimonio nacieron varios hijos. Ellos continúan con la tradición de la
        vitivinicultura. Desde el año 1988 uno de ellos Daniel, ya enólogo
        comenzó a trabajar en prestigiosas bodegas, hasta que el 29 de julio de
        2005 se funda Casa Sancte Petre."
      />
    </Container>
  )
}

export default History

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`
