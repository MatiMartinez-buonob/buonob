import React from "react"
import styled from "styled-components"

import {
  IoLocationOutline,
  IoMailOutline,
  IoCallOutline,
} from "react-icons/io5"

const Contact = () => {
  return (
    <ContactContainer>
      <ContactWrapper>
        <IoCallOutline />
        <TextContact>+54 263 4429165</TextContact>
      </ContactWrapper>
      <ContactWrapper>
        <IoCallOutline />
        <TextContact>+54 263 4677279</TextContact>
      </ContactWrapper>
      <ContactWrapper>
        <IoLocationOutline />
        <TextContact>Boulogne Sur Mer 1920 San Martín Mendoza</TextContact>
      </ContactWrapper>
      <ContactWrapper>
        <IoMailOutline />
        <TextContact>info@buonob.com.ar</TextContact>
      </ContactWrapper>
      <ContactWrapper>
        <IoMailOutline />
        <TextContact>msandrafazio@gmail.com</TextContact>
      </ContactWrapper>
    </ContactContainer>
  )
}

export default Contact

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`

const TextContact = styled.span`
  font-size: 1rem;
`
