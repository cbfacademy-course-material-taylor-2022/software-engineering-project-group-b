import React from 'react';
import './Navbar.css';
import logo from '../images/logo.png';

const Navbar = () => {
    return (

        <nav style = {{backgroundColor: 'black'}}>
        <img src={logo}className='logo' alt={'largelogo'}width={800} style={{display: 'block', margin: '0 auto',}} />
    
    </nav>
        // <div className="navbarSmall-container"> 
        // <img src={logo} alt="logo" className="navbarSmall-logo"/>

            
    
        // </div>
    );
};

export default Navbar