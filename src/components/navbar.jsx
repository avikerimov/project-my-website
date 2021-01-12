import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    const {user, navbarcolor} = this.props;
    return (
      <nav
        //checking if it is a User or BizUser and changing the Navbar color
        className={`navbar navbar-expand-lg navbar-light shadow ${
          user && user.biz
            ? "bg-info" // if BizUser - Navbar color Blue
            : !navbarcolor
            ? "bg-warning" // if User - Navbar color yellow
            : navbarcolor
        } `}
      >
        {/* --------------------------------------------------------------- */}

        <div className="container">
          {/* Main Icon/Title of the site */}
          <Link className="navbar-brand" to="/">
            GadgetShop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* -------------------Left-Side-of-the-NavBar---------------------- */}

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {/* Console Button - dropedown */}
              <li className="nav-item dropdown ">
                <NavLink
                  className="nav-link dropdown-toggle "
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="pr-2 fas fa-headset"></i>
                  Consoles
                </NavLink>
                <div
                  className="dropdown-menu p-0"
                  aria-labelledby="navbarDropdown"
                >
                  <NavLink className="dropdown-item bg-success" to="/xbox">
                    <i className="pr-2 fab fa-xbox"></i>
                    Microsoft - XBOX
                  </NavLink>
                  <NavLink
                    className="dropdown-item bg-primary"
                    to="/playstation"
                  >
                    <i className="pr-2 fab fa-playstation"></i>
                    Sony - PlayStation
                  </NavLink>
                  <NavLink className="dropdown-item bg-danger" to="nintendo">
                    <i className="pr-2 fas fa-gamepad"></i>
                    Nintendo
                  </NavLink>
                </div>
              </li>

              {/* -------------------------Main-Navbar---------------------------- */}

              {/* checking if it's User - showing Store and Favorites button */}
              {user && !user.biz && (
                <React.Fragment>
                  <li className="nav-item active">
                    <NavLink className="nav-link " to="/store">
                      Store
                      <i className="fas fa-shopping-cart ml-2"></i>
                    </NavLink>
                  </li>
                  <li className="nav-item active">
                    <NavLink className="nav-link " to="/my-favorites">
                      Favorites
                      <i className="fas fa-heart ml-2"></i>
                    </NavLink>
                  </li>
                </React.Fragment>
              )}
            </ul>

            {/* -------------------Right-Side-of-the-NavBar---------------------- */}

            <ul className="navbar-nav ml-auto">
              {/* Shows onlt if it isn't a Registration User/BizUser */}
              {/* Buttons: Login, Register and Business */}
              {!user && (
                <React.Fragment>
                  <li className="nav-item">
                    <NavLink className="nav-link " to="/login">
                      login
                      <i className="fas fa-sign-in-alt ml-2"></i>
                    </NavLink>
                  </li>

                  {/* Register button for Large Screens and wider */}
                  <li className="nav-item d-none d-lg-block">
                    <NavLink
                      className="nav-link border-left border-right border-secondary"
                      to="/register"
                    >
                      Register
                      <i className="fas fa-user-plus ml-2"></i>
                    </NavLink>
                  </li>

                  {/* Register button for Medum Screens and smaller */}
                  <li className="nav-item d-lg-none">
                    <NavLink className="nav-link" to="/register">
                      Register
                      <i className="fas fa-user-plus ml-2"></i>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="/biz-login">
                      Business
                      <i className="fas fa-user-tie ml-2"></i>
                    </NavLink>
                  </li>
                </React.Fragment>
              )}

              {/* ----------------------------------------------------------------- */}

              {/* If it User - Shows: 'Hello'+ User name and Logout Button */}
              {user && !user.biz && (
                <React.Fragment>
                  {/* 'Hello' + User name button for Large Screens and wider */}
                  <li className="nav-item d-none d-lg-block">
                    <NavLink
                      className="nav-link border-right border-secondary"
                      to="/"
                    >
                      <i className="fas fa-user mr-2"></i>
                      Hello, {user.name}
                    </NavLink>
                  </li>

                  {/* 'Hello' + User name button for Medum Screens and smaller */}
                  <li className="nav-item d-lg-none">
                    <NavLink className="nav-link" to="/">
                      <i className="fas fa-user mr-2"></i>
                      Hello, {user.name}
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="/logout">
                      Logout
                      <i className="fas fa-door-open ml-2"></i>
                    </NavLink>
                  </li>
                </React.Fragment>
              )}

              {/* ----------------------------------------------------------------- */}

              {/* If it BizUser - Shows: 'Hello'+ User name, My Store Button and Logout Button */}
              {user && user.biz && (
                <React.Fragment>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      <i className="fas fa-user mr-2"></i>
                      Hello, {user.name}
                    </NavLink>
                  </li>

                  {/* My Store button for Large Screens and wider */}
                  <li className="nav-item d-none d-lg-block">
                    <NavLink
                      className="nav-link border-left border-right border-secondary"
                      to="/my-store"
                    >
                      <i className="fas fa-store mr-2"></i>
                      My Store
                    </NavLink>
                  </li>

                  {/* My Store button for Medum Screens and smaller */}
                  <li className="nav-item d-lg-none">
                    <NavLink className="nav-link" to="/my-store">
                      <i className="fas fa-store mr-2"></i>
                      My Store
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="/logout">
                      Logout
                      <i className="fas fa-door-open ml-2"></i>
                    </NavLink>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
