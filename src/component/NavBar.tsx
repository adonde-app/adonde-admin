import { css } from '@emotion/react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const navBarStyles = css`
  background-color: #44ad5e;
`

function NavBar() {
  return (
    <Navbar css={navBarStyles} expand="lg">
      <Container>
        <Navbar.Brand href="#home">adonde admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
