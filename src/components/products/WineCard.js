import React from "react"
import styled from "styled-components"

import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import DescriptionCard from "./DescriptionCard"
import TransitionText from "./TransitionText"

const WineCard = ({ index }) => {
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
    <Container $index={index}>
      <ImageWrapper>
        <WrapperAbsolute>
          <FakeImg fluid={data.bg.childImageSharp.fluid} />
        </WrapperAbsolute>
        <ColorAbsolute>
          <TransitionText />
        </ColorAbsolute>
        <AbsoluteLineVertical />
        <AbsoluteLineHorizontal />
      </ImageWrapper>
      <DescriptionCard />
    </Container>
  )
}

export default WineCard

const Container = styled.div`
  display: flex;
  align-items: center;

  :nth-of-type(4n + 3),
  :nth-of-type(4n) {
    display: flex;
    flex-direction: row-reverse;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  height: 100%;
  width: 50%;

  :hover span:nth-of-type(1) {
    left: 90%;
    opacity: 1;
    visibility: visible;
  }

  :hover span:nth-of-type(2) {
    top: 90%;
    opacity: 1;
    visibility: visible;
  }
`

const AbsoluteLineVertical = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 1px;
  background-color: #ffffff;
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s;
`

const AbsoluteLineHorizontal = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #ffffff;
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s;
`

const ColorAbsolute = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #343130;
  opacity: 0;
  transition: all 0.5s;

  :hover {
    opacity: 0.8;
  }
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
  object-fit: cover;
  object-position: center;
`
