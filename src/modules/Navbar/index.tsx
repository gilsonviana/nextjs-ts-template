import React from 'react'
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NavbarComponent: React.FC = () => {
  const router = useRouter()
  const isHome = router.pathname == '/'

  return (
    <Navbar className={`bg-${isHome ? 'primary' : 'primary'}`} variant="light">
      <Container fluid>
        <Link href="/">
          <Navbar.Brand href="#">Logo</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Button variant={isHome ? 'outline-light' : 'outline-light'}>Entrar</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

export default NavbarComponent