import React, { Component } from 'react'
//import {Nav , Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import axios from "axios";

import './App.css';



export class App extends Component {
  state={
    posts: []
  };
  componentDidMount() {
    
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/?_limit=10`)
      .then(res => {
        const posts = res.data;
        console.log(this.setState({posts}))})
  }
  render() {
    return (
      
    <Router>
    <div >
     <Header />
     <ul>
        { this.state.posts.map(posts=> <li>{posts.title}</li>)}
      </ul>
    
          <Route exact path="/" component={Home}/> 
          <Route path="/about" component={About}/> 
          <Route path="/contact" component={Contact}/> 
    
    </div>
    </Router>
    )
  }
}

export   default App