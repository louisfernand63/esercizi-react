import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faTh } from "@fortawesome/free-solid-svg-icons";
import { Button, Dropdown } from "react-bootstrap";
import Galleria1 from "./Galleria1";
import Galleria2 from "./Galleria2";
import Galleria3 from "./Galleria3";

class HomeMain extends Component {
  render() {
    return (
      <div className="container-fluid px-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4 me-3">TV Shows</h2>
            <div className="dropdown ml-4 mt-1">
              <Dropdown>
                <Dropdown.Toggle variant="dark" className="rounded-0 pe-4">
                  Genres &nbsp;
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Comedy</Dropdown.Item>
                  <Dropdown.Item>Drama</Dropdown.Item>
                  <Dropdown.Item>Thriller</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div>
            <FontAwesomeIcon icon={faThLarge} className="icons" />
            <FontAwesomeIcon icon={faTh} className="icons" />
          </div>
        </div>
        <h4>Trending Now</h4>
        <Galleria1 />
        <h4>Watch it Again</h4>
        <Galleria2 />
        <h4>New Releases</h4>
        <Galleria3 />
      </div>
    );
  }
}

export default HomeMain;

/*
<button
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ backgroundColor: "#221f1f" }}
              ></button> 
*/
