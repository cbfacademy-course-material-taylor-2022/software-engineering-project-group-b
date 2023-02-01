//two navbars was problematic 
import React from 'react';
// import { Navbar, Image } from 'react-bootstrap'
import './NavbarSmall.css';
import logo from '../images/logo_small.png';

const NavbarSmall = () => {
   return (
    <nav style = {{backgroundColor: 'black'}}>
        <img src={logo}className='navbarSmall' alt={'logo'}width={400} />
    
    </nav>
   );

}

export default NavbarSmall;