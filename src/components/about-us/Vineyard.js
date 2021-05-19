import React from "react"
import styled from "styled-components"

import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import InfoContent from "./InfoContent"

const Vineyard = () => {
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
      <InfoContent
        title="Viñedos"
        description="Con unas 80 hectáreas de viñedos orgánicos propios Benito Buono ocupa todos sus días en cuidar de sus vides ubicadas en el oasis Central de Mendoza: Alto Salvador, Chapanay, El Central, y Costa de Araujo son los distritos donde se encuentran estas fincas que producen sólo uvas varietales: Chardonnay, Sauvignon Blanc, Malbec, Merlot, Shiraz Sangiovese y Cabernet Sauvignon.  Los viñedos están ubicados a 980 metros de altura en una zona caracterizada por sus días cálidos y soleados con noches frescas. El sueldo es arenoso y muy permeable, lo que junto al agua blanda constituye un ecosistema muy apropiado para el cultivo de estas uvas orgánicas."
      />
      <FakeImg fluid={data.bg.childImageSharp.fluid} />
    </Container>
  )
}

export default Vineyard

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const FakeImg = styled(Image)``
