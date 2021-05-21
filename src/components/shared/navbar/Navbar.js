import React, { useEffect, useState } from "react"
import styled from "styled-components"

import { useLocation } from "@reach/router"
import { Link } from "gatsby"
import { FaTimes, FaBars } from "react-icons/fa"
import Logo from "./Logo"

export default function Navbar() {
  const location = useLocation()
  // STATE
  const [scroll, setScroll] = useState(false)
  const [menu, setMenu] = useState(false)
  const [inHome, setInHome] = useState(true)

  // EFFECTS
  useEffect(() => {
    function changeNav() {
      if (window.scrollY >= 100) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
    changeNav()
    window.addEventListener("scroll", changeNav)
    return () => {
      window.removeEventListener("scroll", changeNav)
    }
  }, [])

  useEffect(() => {
    if (location.pathname === "/") {
      setInHome(true)
    } else {
      setInHome(false)
    }
  }, [location.pathname])

  // FUNCTIONS
  function handleMenu() {
    setMenu(!menu)
  }

  // RETURN
  return (
    <Header $scroll={scroll} $inHome={inHome}>
      <Logo />
      <MobileIcon onClick={handleMenu}>
        {menu ? (
          <FaTimes size="30px" color="#ababab" />
        ) : (
          <FaBars size="30px" color="#ababab" />
        )}
      </MobileIcon>
      <Nav $menu={menu}>
        <NavLink $scroll={scroll} $inHome={inHome} to="/">
          Inicio
        </NavLink>
        <NavLink $scroll={scroll} $inHome={inHome} to="/organic-wines">
          Vinos Orgánicos
        </NavLink>
        <NavLink $scroll={scroll} $inHome={inHome} to="/products">
          Productos
        </NavLink>
        <Logo middle />
        <NavLink $scroll={scroll} $inHome={inHome} to="/about-us">
          Nosotros
        </NavLink>
        <NavLink $scroll={scroll} $inHome={inHome} to="/">
          Ubicación
        </NavLink>
        <NavLink $scroll={scroll} $inHome={inHome} to="/contact">
          Contacto
        </NavLink>
      </Nav>
    </Header>
  )
}

const Header = styled.header`
  background-color: ${p =>
    p.$scroll ? "#ffffff" : p.$inHome ? "transparent" : "#ffffff"};
  border-bottom: ${props => (props.$scroll ? "1px solid #ababab50" : "none")};
  height: ${props => (props.$scroll ? "80px" : "120px")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  font-size: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  transition: 0.5s all ease;
  box-shadow: ${props =>
    props.scroll ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" : "none"};

  @media (min-width: 768px) {
    justify-content: center;
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  column-gap: 3rem;
  z-index: 1;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: max-content;
    position: absolute;
    top: 80px;
    left: ${props => (props.$menu ? "0" : "-100%")};
    opacity: 1;
    transition: all 0.2s ease;
    background-color: #ffffff;
  }
`

const NavLink = styled(Link)`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${p => (p.$scroll ? "#ababab" : p.$inHome ? "#ffffff" : "#ababab")};
  cursor: pointer;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    padding: 1rem 0;
    width: 100%;
    text-align: center;
  }
`

// Mobile
const MobileIcon = styled.div`
  display: none;
  height: 30px;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`
