import React from "react"
import styled from "styled-components"

import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import InfoContent from "./InfoContent"

const Cellar = () => {
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
      <FakeImg fluid={data.bg.childImageSharp.fluid} />
      <InfoContent
        title="Bodega"
        description="La bodega cuenta con una construcción en dos plantas una de ellas subterránea para la elaboración y conservación de vinos.   Su equipamiento responde a los requerimientos tecnológicos actuales.  En ella se elaboran sólo vinos varietales orgánicos aunando experiencia, ciencia y arte del buen hacer vino. El enólogo y presidente de la empresa es el Lic. Daniel Buono,  profesional con dos títulos en enología y más de 20 años de experiencia.  Él ha trabajado en diversos emprendimientos, muchos de ellos orientados a la exportación."
      />
    </Container>
  )
}

export default Cellar

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
`

const FakeImg = styled(Image)``
