import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Pay And Eat</Navbar.Brand>
                <div>
                    <Nav className="me-auto">
                        <Link className='me-4' to='/'>Home</Link>
                        <Link className='me-4' to='/blog'>Blog</Link>
                        <Link className='me-4' to='/blog'>Profile</Link>
                    </Nav>
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;