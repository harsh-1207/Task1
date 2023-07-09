import React from "react";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

var post_count = 32;

function Subnav(){
    return (
        // <div className="subnav_div">

        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary stick">
        <Container className="bg-body-tertiary-container">
            <Navbar.Brand href="#home"  className="bg">All Posts({post_count})</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="me-auto bg">
                <Nav.Link href="#features">Article</Nav.Link>
                <Nav.Link href="#pricing">Event</Nav.Link>
                <Nav.Link href="#pricing">Education</Nav.Link>
                <Nav.Link href="#pricing">Job</Nav.Link>
            </Nav>

            <Nav>
                <NavDropdown title="Write a Post" id="collasible-nav-dropdown" style={{backgroundColor:'#edeef0', borderRadius:'5px', fontWeight:'bold', marginRight:'15px'}}>
                    <NavDropdown.Item href="#action/3.1">Add Image</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Add Video</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Add File</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Story</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link eventKey={2} href="#memes" style={{backgroundColor:'#2f6ce5', borderRadius:'5px', fontWeight:'bold', color:'white'}}>
                    + Join Group
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        // </div>
    )
}

export default Subnav;