import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
// import logo from ".../public/android-chrome-192x192.png";

function About() {
  return (
    <div className="About">
      <Navbar
        bg="light"
        variant="light"
        sticky="top"
        expand="sm"
        collapseOnSelect
      >
        <Navbar.Brand>
          {/* <img href="" src={logo} width="40px" height="40px" /> TileScad */}
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="design">Design</Nav.Link>
            <Nav.Link href="upload">Upload</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="content">This is a content.</div>
    </div>
  );
}

export default About;
