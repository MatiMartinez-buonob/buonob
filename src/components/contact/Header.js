import React from "react"
import styled from "styled-components"

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Contactanos</Title>
      <Line />
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.5rem;
  text-align: center;
  padding: 4rem 8rem;
`

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  text-transform: capitalize;
  font-family: "Taviraj", serif;
`

const Line = styled.div`
  width: 10%;
  height: 1px;
  background-color: #ababab;
`
