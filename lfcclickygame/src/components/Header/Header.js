import React from "react";
import "./Header.css";
import logo from './liverbird.png';

const Header = () => (
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Liverpool F.C. Clicky Game</h1>
            </header>
            <p className="App-intro">
            To get started click an image below. 
            </p>
        </div> 
);

export default Header;

