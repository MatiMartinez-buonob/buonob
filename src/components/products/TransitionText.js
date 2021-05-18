import React from "react"
import styled from "styled-components"

const TransitionText = () => {
  return (
    <Container>
      <Variety>MALBEC</Variety>
      <Variety>CABERNET SAUVIGNON</Variety>
      <Variety>SHIRAZ</Variety>
    </Container>
  )
}

export default TransitionText

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 10%;
  bottom: 10%;
  color: #ffffff;
`

const Variety = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  font-family: "Taviraj", serif;
`
