import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} width="30" height="30" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">
              Головна
            </NavLink>
            <NavLink className="nav-link" to="/shelters">
              Сховища поблизу
            </NavLink>
            <NavLink className="nav-link" to="/rules">
              Правила
            </NavLink>
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
      </Container>
    </Navbar>
  );
};

export default NavBar;
