import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import './NavbarElements.css';

const MyNavbar = () => {
  return (
    <Navbar className="navbar" expand="lg">
      <Navbar.Brand href="/">
        <img src={"./images/logo.png"} alt="logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="basic-navbar-nav mt-2">
        <Nav className="ml-auto nav">
          <Nav.Link className="nav-link" href="/">Home</Nav.Link>
          <Nav.Link className="nav-link" href="/about">About</Nav.Link>
          <Nav.Link className="nav-link" href="/projects">Projects</Nav.Link>
          <Nav.Link className="nav-link" href="/education">Education</Nav.Link>
          <Nav.Link className="nav-link" href="/contact">Contact</Nav.Link>
          <Nav.Link className="nav-link" href="/my-skills">
            <button href="/my-skills" className="button button-navbar ">My Skills</button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar