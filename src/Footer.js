import React from "react";
// IMAGES
import home from "./assets/images/house-door.svg";
import graph from "./assets/images/graph-up.svg";
import gem from "./assets/images/gem.svg";
import konwerter from "./assets/images/gear.svg";
import list from "./assets/images/list.svg";
const Footer = () => {
  return (
    <footer>
      {/* <nav><div className="menu-item"><img src={home} alt="home" /><p>Start</p></div><div className="menu-item"><img src={graph} alt="home" /><p>Notowanie</p></div><div className="menu-item"><img src={gem} alt="home" /><p>Złoto</p></div><div className="menu-item"><img src={konwerter} alt="home" /><p>Konwerter</p></div><div className="menu-item"><img src={list} alt="home" /><p>Info</p></div></nav> */}
      <nav>
        <div className="menu-item">
          <img src={home} alt="home" />
          <p>Start</p>
        </div>
        <div className="menu-item">
          <img src={graph} alt="home" />
          <p>Notowanie</p>
        </div>
        <div className="menu-item">
          <img src={gem} alt="home" />
          <p>Złoto</p>
        </div>
        {/* <div className="menu-item">
          <img src={konwerter} alt="home" />
          <p>Konwerter</p>
        </div> */}
        
        <div className="menu-item">
          <img src={list} alt="home" />
          <p>Info</p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
