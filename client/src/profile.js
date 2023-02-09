import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
import Navbar from "./components/Navbar.js";
import "./profile.css";
import Home from './Home';
// import './signature.css'
import "./App.css";
// import mongoose from 'mongoose';
// import NavbarSmall from './components/NavbarSmall.js'
// import Signature from './Signature.js'

// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllProfiles, getSignatureCount } from "./services/profileService";
//import { getEmailCount } from "./services/profileService";


// const EmailCount = () => {
//   const [EmailCount, setEmailCount] = useState(0);

//   useEffect(() => {

//     mongoose.connect('mongodb://localhost:27017/profiles', {useNewUrlParser: true, useUnifiedTopology: true})
//     const db = mongoose.connection
//     db.on('error', (error) => console.error(error))
//     console.error.bind(console, 'connection error:');
//     db.once('open',async () => {
//       const email = mongoose.model('user._id', new mongoose.Schema({}));
//       const count = await user._id.countDocuments();
//       setEmailCount(count);
//     })
// }, []);

const Profile = () => {
  const [profiles, setProfiles] = useState(null);
 // const [count, setCount] = useState(null);

  useEffect(() => {
    async function getProfiles() {
      if (!profiles) {
        const response = await getAllProfiles();
        setProfiles(response);
      }
    }

    getProfiles();
  }, [profiles]);

  //    let navigate = useNavigate()

  const renderProfile = (user) => {
    return (
      <li key={user._id}>
        <h3>
          {`${user.first_name} 
           ${user.last_name},`}
        </h3>
        {/* <p>{user.location}</p> */}
      </li>
    );
  };

const [count, setCount] = useState(0);

  useEffect(() => {
    async function getCount() {
      const respons = await fetch("/api/profile/count");
      const data = await respons.json();
      setCount(data.count);
    }
    getCount();
  }, []);


  return (
    <>
      <div className="overlay">
        {/* <div className="container"> */}

        {/* <div className="background" style={{backgroundColor: 'rgb(156, 157, 157)'}}> */}

        <Navbar />
        {/* <NavbarSmall/> */}

        {/* <div className="container"> */}
          <div className="left-column">
            <h1>
              <span className="yellow-border">OUR LOYAL</span>
            </h1>
            <h1>
              <span className="yellow-border">SUPPORTERS</span>
            </h1>
            <h1>
              <span className="yellow-border"> {count} STRONG</span>
            </h1>
          </div>
          {/* style={{position:"absolute", marginTop:"-180px", marginLeft: "100px"}}width={650} */}

          <section>
            <div className="right-column">
              <ul>
                {profiles && profiles.length > 0 ? (
                  profiles.map((profile) => renderProfile(profile))
                ) : (
                  <p>No profiles found</p>
                )}
              </ul>
            </div>
          </section>
        </div>
      {/* </div> */}
      {/* </div> */}

      {/* </div> */}
    </>
  );
};

export default Profile;
