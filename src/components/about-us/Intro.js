import React from "react"
import styled from "styled-components"

const Intro = () => {
  return (
    <TitleContainer>
      <Title>Nuestra Historia</Title>
    </TitleContainer>
  )
}

export default Intro

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem;
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  font-family: "Taviraj", serif;
  text-transform: uppercase;
`
