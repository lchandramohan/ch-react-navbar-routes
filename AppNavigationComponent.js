import React, { Component } from "react";
import { render } from "react-dom";
import { NavLink } from "react-router-dom";
import "./style.css";
import routes from "./routes.js";

class AppNavigationComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className="menus" id="menus">
          <NavLink exact activeClassName="menus_active" to="/">
            <a className="active">HOME</a>
          </NavLink>

          <NavLink exact activeClassName="menus_active" to="/services">
            <a>SERVICES</a>
          </NavLink>

          <NavLink exact activeClassName="menus_active" to="/about">
            <a>ABOUT</a>
          </NavLink>

          <NavLink exact activeClassName="menus_active" to="/contactus">
            <a>CONTACT US</a>
          </NavLink>
        </div>
    );
  }
}

export default AppNavigationComponent;
