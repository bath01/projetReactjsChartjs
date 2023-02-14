/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import "./Header.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Ecole =
  "https://www.freepnglogos.com/uploads/graduation-cap-png/file-font-awesome-solid-graduation-cap-svg-wikimedia-10.png";

function Header(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" className="bar" light>
        <NavbarBrand href="/" className="me-auto">
          <b className="solid">
            L' <img src={Ecole} alt="" /> Ecole
          </b>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href=""></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <div>
        <h1>
          <b className="text-md-start mt-5 solid">Les statistiques</b>
        </h1>
        <p>On vous donne le nombre de Publication par matiere</p>
      </div>
    </div>
  );
}

export default Header;
