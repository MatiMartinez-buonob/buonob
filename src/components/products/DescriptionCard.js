import React from "react"
import styled from "styled-components"

const DescriptionCard = () => {
  return (
    <Container>
      <Name>Tinto Reserva</Name>
      <Variety>Chardonnay</Variety>
      <Line />
      <Description>
        Color amarillo limón con reflejos verdosos, brillante. Aroma floral,
        melón, frutas tropicales, pomelo, y un final de coco, manteca y café.
        Sabor equilibrado, fresco y redondo a la vez, destacan las notas dulces
        con un buen equilibrio ácido.
      </Description>
    </Container>
  )
}

export default DescriptionCard

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  padding: 4rem;
  background-color: #343130;
  width: 100%;

  @media (min-width: 576px) {
    width: 50%;
  }
`

const Name = styled.h1`
  font-size: 1.5rem;
  text-transform: uppercase;
`

const Variety = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  font-family: "Taviraj", serif;
`

const Line = styled.div`
  width: 20%;
  height: 2px;
  background-color: #ababab;
`

const Description = styled.p`
  font-size: 1rem;
  font-weight: 300;
`
