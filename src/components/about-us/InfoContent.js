import React from "react"
import styled from "styled-components"

const InfoContent = props => {
  const { title, description } = props

  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}

export default InfoContent

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  row-gap: 1rem;
  padding: 2rem 1rem;

  @media (min-width: 375px) {
    padding: 2rem;
  }

  @media (min-width: 768px) {
    padding: 2rem 4rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem 6rem;
  }
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  font-family: "Taviraj", serif;
`

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
`
