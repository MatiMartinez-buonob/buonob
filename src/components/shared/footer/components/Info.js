import React from "react"
import styled from "styled-components"
import Logo from "../../navbar/Logo"

const Info = () => {
  return (
    <InfoContainer>
      <Logo />
      <SocialsWrapper></SocialsWrapper>
    </InfoContainer>
  )
}

export default Info

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`

const SocialsWrapper = styled.div`
  display: flex;
  column-gap: 1rem;
`
