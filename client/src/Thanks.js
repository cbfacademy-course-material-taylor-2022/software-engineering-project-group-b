import React, { useState, useEffect } from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import Navbar from "./components/Navbar.js";
import "./Thanks.css";
import "./App.css";
import image from "./images/kids_with_hands_up.jpg";


const Thanks = () => {
  const location = useLocation();
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/profile')
  }, 5000)


  return (
    <div>
      <div className="overlay">
        <Navbar />

        <div
          className="thanks-container"
          // style={{
          //   backgroundImage: `url(${image})`,
          //   backgroundRepeat: "no-repeat",
          //   backgroundPosition: "right",
          // }}
        >
          <div className="left-column">
            <h1>
              <span className="yellow-border">THANKS</span>
            </h1>
            <h1>
              <span className="yellow-border2">{location.state.first_name},</span>
            </h1>
            <h1>
              <span className="yellow-border2">FOR GIVING</span>
            </h1>
            <h1>
              <span className="yellow-border2">A VOICE TO</span>
            </h1>
            <h1>
              <span className="yellow-border3">FREE SCHOOL</span>
            </h1>
            <h1>
              <span className="yellow-border2">MEALS</span>
            </h1>
          </div>

          <section>
            <div className="right-column"><img src={image} alt="meal" style={{marginTop:"-10px", marginLeft: "170px"}}width={30}/></div>
            
          </section>
        </div>
      </div>
    </div>
  );
};
export default Thanks;
