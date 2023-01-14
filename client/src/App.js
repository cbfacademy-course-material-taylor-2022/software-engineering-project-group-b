import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Signature from './Signature'


const App = () => {
  return (
  <Router>
        <Routes>
          <Route path="/" element={<Signature />}/>

        </Routes>
  </Router>
  );

}

export default App









// import React, { useState, useEffect } from "react";
// // import Navbar from './components/Navbar.js'
// import NavbarSmall from './components/NavbarSmall.js'
// import onBoarding from './onBoarding.js'
// import { BrowserRouter, Route, Routes } from "react-router-dom";

//  // SERVICES THAT CALL OUR API ENDPOINTS
//  import { getAllProfiles } from "./services/profileService";

//  function App() {
//    const [profiles, setProfiles] = useState(null);

//    useEffect(() => {
//      async function getProfiles() {
//        if (!profiles) {
//          const response = await getAllProfiles();
//          setProfiles(response);
//        }
//      }

//      getProfiles();
//    }, [profiles]);

//    const renderProfile = (user) => {
//      return (
    
    
//        <li key={user._id}>
//          <h3>
//            {`${user.first_name} 
//            ${user.last_name}`}
//          </h3>
//          <p>{user.location}</p>
//        </li>
      
//      );
//    };

//    return (
//      <div>
//         {/* <Navbar/> */}
//         <NavbarSmall/>
//         <onBoarding/>
//        <ul>
//          {profiles && profiles.length > 0 ? (
//            profiles.map((profile) => renderProfile(profile))
//          ) : (
//            //<p>No profiles found</p>

//            <BrowserRouter>
//            <Route exact path="/" render={()=>(<onBoarding/>)}/>
//            </BrowserRouter>
//          )}
//        </ul>
       
//      </div>
     
//    );
 
//  }

//  export default App;