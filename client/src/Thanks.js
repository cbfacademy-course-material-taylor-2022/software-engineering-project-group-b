import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.js";
import "./Profile.css";
import "./App.css";
import image from "./images/kids_with_hands_up.jpg";

const Thanks = () => {
  return (
    <div>
      <div className="overlay">
        <Navbar />

        <div className="container">
          <div className="left-column">
            <h1>
              <span className="yellow-border">THANKS</span>
            </h1>
            <h1>
              <span className="yellow-border2">DESTINY,</span>
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
            <div className="right-column">
              <img src={image} alt="React Image" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Thanks;
