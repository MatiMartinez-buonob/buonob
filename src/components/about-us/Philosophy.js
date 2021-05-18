import React from "react"
import styled from "styled-components"

import { GiGrapes } from "react-icons/gi"

const Philosophy = () => {
  return (
    <Container>
      <TitleWrapper>
        <Title>Filosofía Buono</Title>
        <GiGrapes size="2rem" />
      </TitleWrapper>
      <Line />
      <Description>
        Se define a la filosofía como el conjunto de saberes que busca
        establecer, de manera racional, los principios más generales que
        organizan y orientan el conocimiento de la realidad, así como el sentido
        del obrar humano. <br />
        <br />
        La filosofía del vino, en nuestra familia, tiene como meta tratar de
        llegar al mayor conocimiento respecto de la forma óptima de producir las
        uvas, de interpretar su potencial y saber explotarlo en una adecuada
        elaboración que, sumada a una esmerada conservación y a un correcto
        embotellado, deviene en un gran vino.
        <br />
        <br /> Esta forma de entender el trabajo define nuestra manera de
        pensar, de ver las cosas; nuestra forma de vivir y ayudar, por medio de
        esta bebida milenaria, a alegrar el corazón de las mujeres y hombres.
        <br />
        <br /> El hombre que vive con fortaleza o serenidad de ánimo para
        soportar las vicisitudes de la vida, sabe apreciar la calidad de estos
        vinos.
      </Description>
    </Container>
  )
}

export default Philosophy

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  row-gap: 1.5rem;
  padding: 4rem 8rem;
  color: #ababab;
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
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

const Description = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  font-family: "Taviraj", serif;
`
