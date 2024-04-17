import { colors } from '@/styles/colorPalette'
import { css } from '@emotion/react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const navBarStyles = css`
  background-color: ${colors.adondeGreen};
`

function NavBar() {
  return (
    <Navbar css={navBarStyles} expand="lg">
      <Container>
        <Navbar.Brand href="/">adonde admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
