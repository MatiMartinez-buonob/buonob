import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const WineCard = () => {
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
    <>
      <ImageWrapper>
        <WrapperAbsolute>
          <FakeImg fluid={data.bg.childImageSharp.fluid} />
        </WrapperAbsolute>
      </ImageWrapper>
      <DescriptionWrapper>
        <Name>TINTO RESERVA</Name>
      </DescriptionWrapper>
    </>
  )
}

export default WineCard

const ImageWrapper = styled.div`
  position: relative;
`

const WrapperAbsolute = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
`

const FakeImg = styled(Image)`
  height: 100%;
  width: 100%;
`

const DescriptionWrapper = styled.div``

const Name = styled.h1`
  font-size: 2rem;
  text-transform: lowercase;
`
