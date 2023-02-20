import React from 'react'
// Nos posibilita hacer validaciones ternárias, en este cado estamos modificando el estilo de acuerdo con la página que estamos
// Accediendo en la app
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {

    const activeLink = ({isActive}) =>  (isActive ? 'active' : 'undefined' )

  return (
    <div>
        <Navbar id='nav' expand="lg">
      <Container>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className={ activeLink } to="/">Home</NavLink>
            <NavLink className={ activeLink } to="/personajes">Personajes</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar