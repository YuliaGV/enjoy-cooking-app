import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap';
import logo from '../img/logo.png';

export const Navigation = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src = {logo}
                            alt = "logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/categories">Categorías</Nav.Link>
                        <Nav.Link href="/about">Nosotros</Nav.Link>
                        <Nav.Link href="#link">Videos</Nav.Link>             
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
