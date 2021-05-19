import React from "react"
import styled from "styled-components"
import Contact from "./Contact"

const Footer = () => {
  return (
    <FooterContainer>
      <Title>
        Lorem ipsum <br /> dolor sit amet consectetur
      </Title>
      <Contact />
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 6rem 8rem;
  background-color: #eee;
  color: #343130;
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  line-height: 3rem;
  text-transform: uppercase;
`
