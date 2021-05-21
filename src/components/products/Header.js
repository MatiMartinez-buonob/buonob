import React from "react"
import styled from "styled-components"

const Header = () => {
  return (
    <Container>
      <Title>Nuestros Vinos</Title>
      <Line />
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </Description>
    </Container>
  )
}

export default Header

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  row-gap: 1.5rem;
  padding: 2rem 1rem;

  @media (min-width: 375px) {
    padding: 2rem;
  }

  @media (min-width: 576px) {
    padding: 4rem;
  }

  @media (min-width: 768px) {
    padding: 4rem 8rem;
  }
`

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  font-family: "Taviraj", serif;
`

const Line = styled.div`
  width: 10%;
  height: 1px;
  background-color: #ababab;
`

const Description = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
`
