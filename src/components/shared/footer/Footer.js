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
  padding: 4rem 2rem;
  background-color: #eee;
  color: #343130;

  @media (min-width: 576px) {
    padding: 4rem;
  }

  @media (min-width: 768px) {
    padding: 6rem 8rem;
  }
`

const Title = styled.h1`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 300;
  text-transform: uppercase;

  @media (min-width: 576px) {
    font-size: 2rem;
    line-height: 3rem;
  }
`
