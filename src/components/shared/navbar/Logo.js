import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Logo = () => {
  return <Text>Buono</Text>
}

export default Logo

const Text = styled(Link)`
  font-size: 2rem;
  font-weight: 300;
  color: #ffffff;
  font-style: italic;
`
