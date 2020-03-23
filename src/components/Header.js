import React from "react";
//import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
//import Post from "./Post"
// import Home from "./Home";
// import Contact from "./Contact";
// import About from "./About"

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <Link className="navbar-brand text-white text-uppercase " to="/">
        AppName
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="/navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <Link className="nav-link text-white text-uppercase ml-5" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link
              className="nav-link text-white text-uppercase ml-5"
              to="/about"
            >
              About <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link
              className="nav-link text-white text-uppercase ml-5"
              to="/posts"
            >
              Posts<span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
