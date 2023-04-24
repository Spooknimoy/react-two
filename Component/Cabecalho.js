import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';

const Cabecalho = () => {
  return (
    <>
    <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Filmes</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Assista</Nav.Link>
            <Nav.Link href="#features">Sobre</Nav.Link>
            <Nav.Link href="#pricing">CADASTRE-SE</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho