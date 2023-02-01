import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.js";
import "./Home.css";
import "./App.css";
import image from "./images/0_free-school-meals.jpg";

const Home = () => {
  return (
    <div>
      <div className="overlay">
        <Navbar />
        <div className="container">
          <div className="left-column">
            <h1>
              <span className="yellow-border">FREE SCHOOL MEALS</span>
            </h1>
            <h1>
              <span className="yellow-border2">FOR EVERY CHILD</span>
            </h1>
            <p>
              Sample code is an opportunity to directly influence how your users
              write code. Therefore, sample code should set the best way to use
              your product. If there is more than one way to code the task, code
              it in the manner that your team has decided is best. If your team
              hasn't considered the pros and cons of each approach, take time to
              do so.
            </p>
            <div
              className="right-column"
              style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
