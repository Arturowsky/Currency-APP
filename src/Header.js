import React from 'react';

// STYLES
import "./styles/header.scss"
// IMAGES
import logo from "./assets/images/currency-exchange.svg"
const Header = () => {

    return (<header>
        <div><img src={logo} alt="logo" /><h1>Currency APP</h1></div>
    </header>)
}

export default Header;