// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">My Dashboard</div>
            <ul className="nav-links">
                <li><a href="#overview">Overview</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#about-us">About Us</a></li>
                <li><a href="#contact-us">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
