import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const logo = "./logo.png";

function NavbarMain(){
    return (
        <div className="navbar_main">

            <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#"><img className="logo_img" src={require('./logo.png')} alt="mylogo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                
                <Form className="d-flex" style={{ marginLeft:'35%',  marginRight:'17%', color:'gray', width:'28%', backgroundColor:'#f2f2f2' }}>
                    <Form.Control
                    type="search"
                    placeholder="🔍 Search for your favorite groups in ATG"
                    className="me-2"
                    aria-label="Search" style={{backgroundColor:'lightgray', borderRadius:'50px', fontWeight:'500', fontSize:'17px'}}
                    />
                </Form>

                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1" className="create_account" style={{ fontSize: '120%', position:'absolute', left:'auto', right:'110px'}}>Create Account.</Nav.Link>
                    <NavDropdown title="It's Free!" id="navbarScrollingDropdown" className="login_link" style={{ fontSize: '120%', marginLeft:'300px' }}>
                    <NavDropdown.Item href="#action4">
                        Login
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Sign Up
                    </NavDropdown.Item>
                    </NavDropdown>
                    {/* <Nav.Link href="#" disabled>
                    Link
                    </Nav.Link> */}
                </Nav>
                
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default NavbarMain;