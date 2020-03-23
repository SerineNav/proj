import React, { Component } from "react";
//import {Nav , Navbar} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Post from "./components/Post";
import Notfound from "./components/Notfound";
import "./App.css";
import Posts from "./components/Posts";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/posts" component={Posts} />
            <Route path="/404" component={Notfound} />
            <Route path="/:postId" component={Post} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
