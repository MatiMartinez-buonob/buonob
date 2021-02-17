import React from "react"
import styled from "styled-components"
import Contact from "./components/Contact"
import Info from "./components/Info"

const Footer = () => {
  return (
    <FooterContainer>
      <Info />
      <Contact />
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  background-color: #343130;
  padding: 4rem 8rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #ffffff;
`
