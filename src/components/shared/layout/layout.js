import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import styled from "styled-components"

const Layout = ({ children, padding }) => {
  return (
    <>
      <Navbar />
      <Main padding={padding}>{children}</Main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Main = styled.main`
  padding-top: ${p => (p.padding ? "120px" : "0")};
`
