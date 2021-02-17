import React from "react"
import styled from "styled-components"

const Info = () => {
  return (
    <InfoContainer>
      <Title>Nuestra Bodega</Title>
      <Grid>
        <InfoCard>
          <TitleCard>Contacto</TitleCard>
          <TextCard>
            +54 263 4429165
            <br />
            +54 263 4677279
            <br />
            info@buonob.com.ar
            <br />
            msandrafazio@gmail.com
          </TextCard>
        </InfoCard>
        <InfoCard>
          <TitleCard>Ubicación</TitleCard>
          <TextCard>
            Prolongación Boulogne Sur Mer 1920, San Martín Mendoza
            <br />
            Entre Thames y Miguez
          </TextCard>
        </InfoCard>
        <InfoCard>
          <TitleCard>Redes</TitleCard>
          <TextCard>
            Facebook
            <br />
            Instagram
          </TextCard>
        </InfoCard>
      </Grid>
    </InfoContainer>
  )
}

export default Info

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  color: #ababab;
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`

const InfoCard = styled.div``

const TitleCard = styled.h2``

const TextCard = styled.span``
