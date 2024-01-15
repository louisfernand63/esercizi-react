import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../Navbar.css";

/*
npx create-react-app 'my-app'

npm install react-bootstrap bootstrap

npm install react-icons --save

npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome

*/

function MyNavbar({ logo, onIconClick1, onIconClick2 }) {
  return (
    <>
      <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#221f1f" }}>
        <Container fluid style={{ margin: "0" }}>
          <Navbar.Brand href="#">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "100px", height: "55px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="mr-auto">
              <Nav.Link
                href="javascript:void(0)"
                className="font-weight-bold"
                onClick={onIconClick2}
              >
                Home
              </Nav.Link>
              <Nav.Link href="#" className="font-weight-bold">
                TV Shows
              </Nav.Link>
              <Nav.Link href="#" className="font-weight-bold">
                Movies
              </Nav.Link>
              <Nav.Link href="#" className="font-weight-bold">
                Recently Added
              </Nav.Link>
              <Nav.Link href="#" className="font-weight-bold">
                My List
              </Nav.Link>
            </Nav>
            <FontAwesomeIcon icon={faSearch} className="icons ms-auto" />
            <div id="kids">KIDS</div>
            <FontAwesomeIcon icon={faBell} className="icons" />
            <FontAwesomeIcon
              icon={faUser}
              className="icons utente"
              onClick={onIconClick1}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
