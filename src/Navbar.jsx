import React from 'react';
import "./styles.css";

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">Michael Shahine</h1>
            <ul className="navbar-menu">
                <li><a href="App.jsx" className="navbar-link">Home</a></li>
                <li><a href="#" className="navbar-link">Projects</a></li>
                <li><a href="About.jsx" className="navbar-link">About</a></li>
                <li><a href="#" className="navbar-link">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;