import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">Michael Shahine</h1>
            <ul className="navbar-menu">
                <li><Link to="/Home" className="navbar-link">Home</Link></li>
                <li><Link to="/Projects" className="navbar-link">Projects</Link></li>
                <li><Link to="/About" className="navbar-link">About</Link></li>
                <li><Link to="/Contact" className="navbar-link">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;