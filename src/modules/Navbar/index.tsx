import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { useRouter } from 'next/router'

const NavbarComponent: React.FC = () => {
  const router = useRouter()

  console.log("NavbarComponent", router.pathname);
  
  const isHome = router.pathname == '/'

  return (
    <Navbar className={`bg-${isHome ? 'light' : 'primary'}`} variant="light">
      <Container>
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Button variant={isHome ? 'primary' : 'outline-light'}>Entrar</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

export default NavbarComponent