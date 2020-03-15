import React from 'react';
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import Home from "./Home";
// import Contact from "./Contact";
// import About from "./About"

function Header() {
    return (
       
        
        
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Link to="/">Home | </Link>
      <Link to="/about">About |</Link>
      <Link to="/contact">Contact</Link>
    </Nav>
    
      
    </Navbar>
        
    
    )
}

export default Header
