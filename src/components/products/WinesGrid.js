import React from "react"
import styled from "styled-components"
import WineCard from "./WineCard"

const WinesGrid = () => {
  return (
    <Container>
      <WineCard />
    </Container>
  )
}

export default WinesGrid

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`
