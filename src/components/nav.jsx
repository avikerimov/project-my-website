import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  state = {};
  render() {
    const { title1, title2, title3, nav2, navColor } = this.props;
    return (
      <ul
        className="nav nav-pills mb-3 justify-content-center"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item">
          <NavLink
            className={`nav-link ${navColor} m-1`}
            to="#"
          >
            {title1}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={`nav-link ${navColor} m-1`}
            to="#"
          >
            {title2}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={`nav-link ${navColor} m-1`}
            to="#"
          >
            {title3}
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Nav;
