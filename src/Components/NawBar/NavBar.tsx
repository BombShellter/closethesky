import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="/">
        <img src={logo} width="30" height="30" alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Головна</Nav.Link>
          <Nav.Link href="/shelters">Сховища поблизу</Nav.Link>
          <Nav.Link href="/rules">Правила</Nav.Link>
        </Nav>

        <Nav>
          <Button className="log" variant="warning">
            Login
          </Button>
          <Button className="log" variant="warning">
            Sing Up
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
