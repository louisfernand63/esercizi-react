import React, { Component } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { BiCheckSquare } from "react-icons/bi";

class ProfiloMain extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="profilo w-50 m-auto border-bottom border-secondary">
          <h1 className="text-start border-bottom border-secondary py-2">
            Edit Profile
          </h1>
          <div className="griglia1">
            <div className="foto mt-4">
              <div>
                <img
                  src="https://cdn.pixabay.com/photo/2016/08/18/11/00/man-1602633_1280.png"
                  alt=""
                  className=""
                />

                <i className="bi bi-pencil-square"></i>
              </div>
            </div>
            <div className="testo mt-4">
              <div className="primoBlock d-flex flex-column border-bottom border-secondary pb-4">
                <input
                  type="text"
                  placeholder="DLF Profile"
                  className="p-2 mb-5 border-0"
                  defaultValue="DLF Profile"
                />
                <label className="mb-3">Language:</label>
                <Dropdown>
                  <Dropdown.Toggle variant="dark" className="rounded-0 pe-4">
                    English
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>French</Dropdown.Item>
                    <Dropdown.Item>Russian</Dropdown.Item>
                    <Dropdown.Item>Chinese</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="secondBlock d-flex flex-column border-bottom border-secondary">
                <label className="mt-5 mb-3">Maturity Settings:</label>
                <Button variant="dark" className="btn1 p-1 fs-5 mb-3">
                  ALL MATURITY RATINGS
                </Button>
                <p className="mb-4">
                  Show titles of all maturity ratings for this profile.
                </p>
                <Button
                  type="button"
                  variant="outline-secondary"
                  className="rounded-0 mb-5"
                >
                  EDIT
                </Button>
              </div>
              <div className="terzoBlock d-flex flex-column pb-4">
                <label className="mt-5 mb-3">Autoplay controls</label>
                <div className="d-flex align-items-center ">
                  <BiCheckSquare
                    className="fs-2 me-3"
                    style={{ color: "white" }}
                  />
                  <p className="mb-0">
                    Autoplay previews while browsing on all devices.
                  </p>
                </div>
                <div className="d-flex align-items-center ">
                  <BiCheckSquare
                    className="fs-2 me-3"
                    style={{ color: "white" }}
                  />
                  <p className="mb-0">
                    Autoplay previews while browsing on all devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottoni w-50 m-auto d-flex justify-content-between mt-4">
          <Button variant="primary">SAVE</Button>
          <Button variant="secondary">CANCEL</Button>
          <Button variant="danger">DELETE PROFILE</Button>
        </div>
      </div>
    );
  }
}

export default ProfiloMain;
