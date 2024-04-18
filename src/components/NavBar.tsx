import { colors } from '@/styles/colorPalette'
import { css } from '@emotion/react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import logo from '@/images/logo.png'
import title from '@/images/adondeTitle2.png'
import Text from '@shared/Text'
import styled from '@emotion/styled'

const navBarStyles = css`
  background-color: ${colors.adondeGreen};
`
const Titleimg = styled.img`
  padding-bottom: 8px;
  padding-left: 10px;
`

function NavBar() {
  return (
    <Navbar css={navBarStyles} expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} width="40x" />
          <Titleimg src={title} width="140px" height="30px" />
        </Navbar.Brand>

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
