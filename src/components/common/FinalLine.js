import React from "react"
import styled from "styled-components"

const FinalLine = () => {
  return (
    <Container>
      <Line />
      <Text>Lorem ipsum dolor sit amet</Text>
    </Container>
  )
}

export default FinalLine

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  row-gap: 1.5rem;
  padding: 2rem 1rem;
  color: #ababab;

  @media (min-width: 375px) {
    padding: 2rem;
  }

  @media (min-width: 576px) {
    padding: 4rem;
  }

  @media (min-width: 768px) {
    padding: 6rem 8rem;
  }
`

const Text = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  font-style: italic;
  font-family: "Taviraj", serif;
`

const Line = styled.div`
  width: 10%;
  height: 1px;
  background-color: #ababab;
`
