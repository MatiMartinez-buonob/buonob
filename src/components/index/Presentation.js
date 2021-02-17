import React from "react"
import styled from "styled-components"

const Presentation = () => {
  return (
    <PresentationContainer>
      <Text>
        Casa Sancte Petre es una empresa familiar cuyos antecesores cultivaron
        la vid en Europa por varias generaciones y en Argentina desde el año
        1949.
      </Text>
      <Text>
        La filosofía del vino, en nuestra familia, tiene como meta tratar de
        llegar al mayor conocimiento respecto de la forma óptima de producir las
        uvas, de interpretar su potencial y saber explotarlo en una adecuada
        elaboración que, sumada a una esmerada conservación y a un correcto
        embotellado, deviene un gran vino.
      </Text>
      <Text>
        Esta forma de entender el trabajo define nuestra manera de pensar, de
        ver las cosas; nuestra forma de vivir y ayudar, por medio de esta bebida
        milenaria, a alegrar el corazón de las mujeres y hombres.
      </Text>
    </PresentationContainer>
  )
}

export default Presentation

const PresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;
  padding: 6rem 25%;
  text-align: center;
  background-color: #c2997e;
  color: #ffffff;
`

const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
`
