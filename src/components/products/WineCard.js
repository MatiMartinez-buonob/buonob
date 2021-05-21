import React from "react"
import styled from "styled-components"

import Image from "gatsby-image"
import DescriptionCard from "./DescriptionCard"
import TransitionText from "./TransitionText"

const WineCard = ({ item }) => {
  return (
    <Container>
      <ImageWrapper>
        <WrapperAbsolute>
          <FakeImg fluid={item.childImageSharp.fluid} />
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
  flex-direction: column;

  @media (min-width: 576px) {
    flex-direction: row;

    :nth-of-type(2n) {
      flex-direction: row-reverse;
    }
  }

  @media (min-width: 992px) {
    :nth-of-type(n) {
      flex-direction: row;
    }

    :nth-of-type(4n + 3),
    :nth-of-type(4n) {
      display: flex;
      flex-direction: row-reverse;
    }
  }
`

const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  height: 350px;
  width: 100%;

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

  @media (min-width: 576px) {
    height: 100%;
    width: 50%;
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
