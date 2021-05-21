import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Logo = ({ middle }) => {
  return (
    <Text to="/" $middle={middle}>
      Buono
    </Text>
  )
}

export default Logo

const Text = styled(Link)`
  display: ${p => (p.$middle ? "none" : "block")};
  font-size: 2rem;
  font-weight: 300;
  color: ${props =>
    props.scroll
      ? "#ababab"
      : props.currentUrl === "/"
      ? "#ffffff"
      : "#ababab"};
  font-style: italic;

  @media (min-width: 768px) {
    display: ${p => (p.$middle ? "block" : "none")};
  }
`
