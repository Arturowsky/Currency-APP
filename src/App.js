import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// COMPONENTS
import Header from "./Header";
import Home from "./Home";
import Gold from "./Gold";
import Info from "./Info";
import Stats from "./Stats"

// STYLE
import "./App.scss";
// IMAGES
import home from "./assets/images/house-door.svg";
import graph from "./assets/images/graph-up.svg";
import gem from "./assets/images/gem.svg";
import konwerter from "./assets/images/gear.svg";
import list from "./assets/images/list.svg";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/notowanie">
          <Stats />
        </Route>
        <Route path="/cenazlota">
          <Gold />
        </Route>
        <Route path="/info">
          <Info />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <div>
        <footer>
          <nav>
            <Link exact to="/">
              <div className="menu-item">
                <img src={home} alt="home" className="icon" />
                <p>Start</p>
              </div>
            </Link>

            <Link to="/notowanie">
              <div className="menu-item">
                <img src={graph} alt="home" className="icon" />
                <p>Notowanie</p>
              </div>
            </Link>
            <Link to="/cenazlota">
              <div className="menu-item">
                <img src={gem} alt="home" className="icon" />
                <p>Złoto</p>
              </div>
            </Link>
            <Link to="/konwerter">
              <div className="menu-item">
                <img src={konwerter} alt="home" className="icon" />
                <p>Konwerter</p>
              </div>
            </Link>
            <Link to="/info">
              <div className="menu-item">
                <img src={list} alt="home" className="icon" />
                <p>Info</p>
              </div>
            </Link>
          </nav>
        </footer>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      </div>
     
    </Router>
  );
}
