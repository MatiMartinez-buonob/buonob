import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const Hero = () => {
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
    <HeroContainer>
      <WrapperBg>
        <FakeImg fluid={data.bg.childImageSharp.fluid} />
        <ColorFake />
      </WrapperBg>
      <InfoWrapper>
        <Title>Bodegas Vinos Buono B</Title>
        <Info>Vinos Varietales Orgánicos, San Martín Mendoza</Info>
        <ButtonToDown>Mas Información</ButtonToDown>
      </InfoWrapper>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

// Background
const WrapperBg = styled.div`
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

const ColorFake = styled.div`
  width: 100%;
  height: 100%;
  background-color: #424453;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.6;
`

// Information
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #ffffff;
  row-gap: 2rem;
  z-index: 1;
`

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 4rem;
`

const Info = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
  font-style: oblique;
  line-height: 1.5rem;
`

const ButtonToDown = styled.button`
  background-color: transparent;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 0;
  width: max-content;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 1rem 3rem;
`
