import React from 'react'
import { FaBars } from "react-icons/fa";
import { FaSearch } from 'react-icons/fa';
import {
  Nav, NavbarContainer, NavLogo, MobileIcon,
  NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink,Menu,Green
} from "./NavElements"

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>

          <NavLogo to='/'>Estate<Green>Agency</Green></NavLogo>
          <MobileIcon>
            <FaBars />

          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/property">Property</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/blog">Blog</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to="/pages">Pages</NavLinks>
              <Menu>
              <NavLinks href="property-single.html">Property Single</NavLinks>
              <NavLinks href="blog-single.html">Blog Single</NavLinks>
              <NavLinks href="agents-grid.html">Agents Grid</NavLinks>
              <NavLinks href="agent-single.html">Agent Single</NavLinks>
              </Menu>


            </NavItem>
            <NavItem>
              <NavLinks to="/contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/fasearch"><FaSearch /></NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar

