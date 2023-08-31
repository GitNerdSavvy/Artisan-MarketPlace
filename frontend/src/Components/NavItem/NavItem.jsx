import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./Nav.css";

const NavItem = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <div className={`NavItem ${scrolled ? "scrolled" : ""}`} id="navItem">
      <Container fluid className="contain-nav">
        <Navbar
          expand="md"
          className={`bg-light justify-content-md-center ${
            scrolled ? "scrolled-nav" : ""
          }`}
        >
          <Navbar.Brand href="/">
            Artisan <br /> MarketPlace
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span
              style={{ filter: "invert(100%)" }}
              className="navbar-toggler-icon"
            ></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>

              <Nav.Link
                href="#artist"
                className={
                  activeLink === "artist" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("artist")}
              >
                Artists
              </Nav.Link>

              <Nav.Link
                href="#arts"
                className={
                  activeLink === "arts" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("arts")}
              >
                Arts
              </Nav.Link>

              <Nav.Link
                href="#contacts"
                className={
                  activeLink === "contacts"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("contacts")}
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavItem;
