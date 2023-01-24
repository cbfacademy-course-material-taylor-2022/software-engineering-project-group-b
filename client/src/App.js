


import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './Profile'
import Signature from './Signature'
import Thanks from './Thanks'


    

const App = () => {
    // const [first_name, setFirstName] = useState(null);
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Signature />}/>
                <Route path="/Signature" element={<Signature />}/>
                {/* <Route path="/Thanks" element={ <Thanks/> }/>   */}
                <Route path="/Profile" element={ <Profile/> }/>  
            </Routes>
        </Router>
        );

}
export default App;

// import React, { useState, useEffect } from "react";


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

//            <p>No profiles found</p>
//          )}
//        </ul>
//      </div>
//    );
//  }

//  export default App;

