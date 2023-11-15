import React from 'react'
import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import NavLink from 'react-bootstrap/esm/NavLink';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function Navigation() {
  const navigate = useNavigate()
  const { user } = useAuth()

  const handlePerfil = () => {
    if (!user) {
      navigate('/login')
      return
    } else {
      navigate('/perfil')
    }
  }

  return (
    <NavbarCustom expand="lg">
      <Container>
        <NavbarBrandCustom href="#home">
          <img src="logo.png" />
        </NavbarBrandCustom>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLinkCustom href=""><LinkCustom to='/'>Inicio</LinkCustom></NavLinkCustom>
            <NavLinkCustom href="" onClick={handlePerfil}>Perfil</NavLinkCustom>
            <NavLinkCustom href="#sobre">Sobre</NavLinkCustom>
            <NavLinkCustom href="#contato">Contato</NavLinkCustom>
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

    &:active  {
      color: var(--text);
    }
`;

const LinkCustom = styled(Link)`
  color: var(--text);
  text-decoration: none;
`;