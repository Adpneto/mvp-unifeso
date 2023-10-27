import React from 'react'
import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import NavLink from 'react-bootstrap/esm/NavLink';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <NavbarCustom expand="lg">
      <Container>
        <NavbarBrandCustom href="#home">
          <img src="logo.png"/>
        </NavbarBrandCustom>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLinkCustom href="#home">Inicio</NavLinkCustom>
            <NavLinkCustom href="#link">Agendamento</NavLinkCustom>
            <NavLinkCustom href="#link">Sobre</NavLinkCustom>
            <NavLinkCustom href="#link">Contato</NavLinkCustom>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavbarCustom>
  )
}

const NavbarCustom = styled(Navbar)` 
    background-color: var(--color1);
`;

const NavbarBrandCustom = styled(NavbarBrand)`
    & img {
      width: 100px;
      margin-right: 20px;
    }
`;

const NavLinkCustom = styled(NavLink)`
    color: var(--text);
    font-weight: 700;

    &:hover {
      color: var(--text2);
    }
`;