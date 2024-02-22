import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Nbar() {
  return (
    <>
       <Navbar bg="dark" sticky='top' variant="dark" expand="lg">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="../home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="../contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      
    </>
  )
}
