import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
// COMPONENTS
import Header from "./Header";
import Home from "./Home";
import Gold from "./Gold";
import Info from "./Info";
import Stats from "./Stats"
import Exchange from "./Exchange"

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
      <Route path="/konwerter" component={Exchange} />
          {/* <Exchange /> */}
        {/* </Route> */}
        <Route path="/notowanie" component={Stats} />
          {/* <Stats />
        </Route> */}
        <Route path="/cenazlota" component={Gold} />
          {/* <Gold />
        </Route> */}
        <Route path="/info" component={Info} />
          {/* <Info />
        </Route> */}
        <Route exact path="/" component={Home} />
          {/* <Home />
        </Route> */}
      </Switch>
      <div className="main-component">
        <footer>
          <nav>
            <NavLink  to="/" activeClassName="aktiv">
              <div className="menu-item">
                <img src={home} alt="home" className="icon" />
                <p>Start</p>
              </div>
            </NavLink>

            <Link  to="/notowanie">
              <div className="menu-item">
                <img src={graph} alt="home" className="icon" />
                <p>Notowanie</p>
              </div>
            </Link>
            <Link  to="/cenazlota">
              <div className="menu-item">
                <img src={gem} alt="home" className="icon" />
                <p>Złoto</p>
              </div>
            </Link>
            <Link  to="/konwerter">
              <div className="menu-item">
                <img src={konwerter} alt="home" className="icon" />
                <p>Konwerter</p>
              </div>
            </Link>
            <Link  to="/info">
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
