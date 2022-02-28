import React from 'react'
import { Navbar, Nav, Container, Form, FormControl, Button} from 'react-bootstrap';
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
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/search">Search</Nav.Link>
                        <Nav.Link href="/categories">Categories</Nav.Link>
                        <Nav.Link href="/places">Places</Nav.Link>           
                    </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    )
}
