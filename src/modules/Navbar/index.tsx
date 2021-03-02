import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'

const NavbarComponent: React.FC = () => {
  return (
    <Navbar variant="light">
      <Container>
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Button>Entrar</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

export default NavbarComponent