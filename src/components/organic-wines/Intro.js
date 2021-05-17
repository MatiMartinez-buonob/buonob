import React from "react"
import styled from "styled-components"

const Intro = () => {
  return (
    <IntroContainer>
      <TitleWrapper>
        <Title>
          Vinos <br /> Orgánicos
        </Title>
      </TitleWrapper>
      <TextWrapper>
        <Text>
          La agricultura orgánica es un sistema de producción libre de
          pesticidas y fertilizantes de síntesis química; favoreciendo así la
          sustentabilidad de los sistemas y el cuidado de los recursos
          naturales. Se entiende como sinónimos a orgánico, biológico y
          ecológico.
        </Text>
        <Text>
          OIA cuenta con programas de certificación de producciones orgánicas
          diferenciados según el mercado final donde se comercializará el
          producto:
        </Text>
        <Text>
          Argentina Unión Europea Brasil Estados Unidos Suiza Canadá Japón Reino
          Unido Otros destinos
        </Text>
        <Text>
          ¿Cómo es el proceso de certificación Orgánica? <br /> El proceso
          comienza cuando el productor, elaborador y/o comercializador se reúne
          con OIA para presentar el proyecto a certificar. El mismo se analiza
          en esta primera etapa seleccionando las normas bajos las cuales se
          iniciará el proceso de certificación.
        </Text>
        <Text>
          Ante la solicitud de certificación y firma de contrato, se realiza el
          intercambio de documentación e información requerida por el Programa
          entre el cliente y OIA.
        </Text>
        <Text>
          Luego de concretar la inspección, se prepara un informe del cual
          pueden, como no, surgir no conformidades. El cliente está certificado
          luego de un informe positivo con ausencia de no conformidades.
          Finalmente, se reinicia el ciclo para la supervisión.
        </Text>
      </TextWrapper>
    </IntroContainer>
  )
}

export default Intro

const IntroContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr;
  column-gap: 4rem;
  padding: 6rem 2rem;
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  text-transform: uppercase;
  font-family: "Taviraj", serif;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1rem;
`

const Text = styled.p`
  font-size: 1rem;
`
