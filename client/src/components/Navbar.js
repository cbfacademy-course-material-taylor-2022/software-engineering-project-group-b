import React from 'react';
import './Navbar.css';
import logo from '../images/logo_small.png';

const Navbar = () => {
    return (
        <div className="navbarSmall-container"> 
        <img src={logo} alt="logo" className="navbarSmall-logo"/>

            
    
        </div>
    );
};

export default Navbar