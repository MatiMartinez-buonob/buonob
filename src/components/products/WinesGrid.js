import React from "react"
import styled from "styled-components"
import WineCard from "./WineCard"

const data = [
  { id: 0 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
]

const WinesGrid = () => {
  return (
    <Container>
      {data.map(item => (
        <WineCard index={item.id} key={item.id} />
      ))}
    </Container>
  )
}

export default WinesGrid

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
`
