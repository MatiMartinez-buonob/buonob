import React, { useEffect, useState } from "react"
import styled from "styled-components"

import { Link } from "gatsby"
import { FaTimes, FaBars } from "react-icons/fa"
import Logo from "./Logo"

export default function Navbar() {
  const [scroll, setScroll] = useState(false)
  const [menu, setMenu] = useState(false)

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
  }, [])

  function handleMenu() {
    setMenu(!menu)
  }

  return (
    <Header scroll={scroll}>
      <MobileIcon onClick={handleMenu}>
        {menu ? (
          <FaTimes size="30px" color="#ababab" />
        ) : (
          <FaBars size="30px" color="#ababab" />
        )}
      </MobileIcon>
      <Nav menu={menu}>
        <NavLink scroll={scroll} to="/">
          Inicio
        </NavLink>
        <NavLink scroll={scroll} to="/">
          Vinos Orgánicos
        </NavLink>
        <NavLink scroll={scroll} to="/">
          Productos
        </NavLink>
        <Logo />
        <NavLink scroll={scroll} to="/">
          Nosotros
        </NavLink>
        <NavLink scroll={scroll} to="/">
          Ubicación
        </NavLink>
        <NavLink scroll={scroll} to="/contact">
          Contacto
        </NavLink>
      </Nav>
    </Header>
  )
}

const Header = styled.header`
  background-color: ${props => (props.scroll ? "#ffffff" : "transparent")};
  border-bottom: ${props => (props.scroll ? "1px solid #ababab50" : "none")};
  height: ${props => (props.scroll ? "80px" : "120px")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  transition: 0.5s all ease;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }

  @media (max-width: 576px) {
    padding: 0 1rem;
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  column-gap: 3rem;
  z-index: 1;

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: max-content;
    position: absolute;
    top: 80px;
    left: ${props => (props.menu ? "0" : "-100%")};
    opacity: 1;
    transition: all 0.2s ease;
    background-color: #ffffff;
  }
`

const NavLink = styled(Link)`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${props => (props.scroll ? "#ababab" : "#ffffff")};
  cursor: pointer;
  text-transform: uppercase;

  @media (max-width: 576px) {
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

  @media (max-width: 576px) {
    display: block;
    cursor: pointer;
  }
`
