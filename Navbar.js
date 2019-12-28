import React, { Component } from "react";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";


export default class Navbarbaru extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
    this.state = {
      dropdownOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
      <div
        style={{
          width: "100%",
          top: "0",
          backgroundColor: "#2D2D2E",
          display: "block",
          fontFamily: "Ubuntu"
        }}
      >
        <Navbar light expand="md" style={{ height: "5rem" }}>
          <Button
            caret
            color="info"
            style={{
              marginLeft: "5rem",
              borderRadius: "0px",
              width: "5rem",
              fontSize: "25px"
            }}
          >
            <strong>NE</strong>
          </Button>

          <NavbarBrand
            href="/"
            style={{ marginLeft: "1rem", color: "whitesmoke" }}
          >
            <strong> NAMORA ED</strong>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse
            isOpen={this.state.isOpen}
            navbar
            style={{ marginRight: "3rem" }}
          >
            <Nav className="ml-auto" navbar style={{marginRight:"5rem"}}>
              <NavItem>
                <NavLink href="/">
                  <Button
                    outline
                    color="info"
                    style={{
                      borderRadius: "25px",
                      border: "0px",
                      color: "#FEFEFE"
                    }}
                  >
                    <strong> Beranda </strong>
                  </Button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/program">
                  <Button
                    outline
                    color="info"
                    style={{
                      borderRadius: "25px",
                      border: "0px",
                      color: "#FEFEFE"
                    }}
                  >
                    <strong> Program </strong>
                  </Button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tentor">
                  <Button
                    outline
                    color="info"
                    style={{
                      borderRadius: "25px",
                      border: "0px",
                      color: "#FEFEFE",
                      marginRight: "1rem"
                    }}
                  >
                    <strong> Tentor </strong>
                  </Button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/daftar">
                  <Button
                    caret
                    color="info"
                    style={{ borderRadius: "25px", width: "10rem" }}
                  >
                    <strong> Daftar </strong>
                  </Button>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
