import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-dark">
            <Container>
                <Navbar.Brand href="#home" className='text-light'>React-Saga</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex gap-4">
                        <NavLink to='/' className='text-light text-decoration-none' activeclassname="active">Home</NavLink>
                        {/* <NavLink to='/course-details' className='text-light text-decoration-none'>Courses</NavLink> */}
                        <NavLink to='/playlist' className='text-light text-decoration-none'>Playlist</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header