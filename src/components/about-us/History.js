import React from "react"
import styled from "styled-components"

const History = () => {
  return (
    <HistoryContainer>
      <PartLeftWrapper>
        <ImgWrapper>Hola</ImgWrapper>
        <InfoWrapper>
          <Title>Historia</Title>
        </InfoWrapper>
      </PartLeftWrapper>
      <PartRightWrapper></PartRightWrapper>
      <PartLeftWrapper></PartLeftWrapper>
      <PartRightWrapper></PartRightWrapper>
    </HistoryContainer>
  )
}

export default History

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`

const PartLeftWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
`

const PartRightWrapper = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
`

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 400;
`
