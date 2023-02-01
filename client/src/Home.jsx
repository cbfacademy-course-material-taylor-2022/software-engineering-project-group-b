import Navbar from "./components/Navbar";
import { useState } from "react";
import image from './images/newboywithtray.png';

const Home = () => {
  return (
    <>
      <div className="overlay">
        {/* <div className="container"> */}

        {/* <div className="background" style={{backgroundColor: 'rgb(156, 157, 157)'}}> */}

        <Navbar />
        {/* <NavbarSmall/> */}

        <div className="container">
          <div className="left-column">
            <h1>
             <span className="yellow-border">FREE SCHOOL DINNERS FOR EVERY CHILD</span>
            </h1>
          </div>
          {/* style={{position:"absolute", marginTop:"-180px", marginLeft: "150px"}}width={650} */}

          <section>
            <div className="left-column">
                <div className="photo-container"> 
                <div class="clearfix"></div>
                  <img src={image} class="img-fluid"  alt="meals" width="800" height="600"/>
                  <p>When children eat filling, healthy, nutritious meals, their
                health and educational outcomes improve, because they can focus
                in the classroom. Food eaten during the school day makes up
                around 20% of the entire daily meal consumption. So making sure
                the food children eat at primary school is taking place and in
                the right quantities is crucial. Making school meals free for
                all primary children is an important way to close the
                educational attainment gap in the UK.</p>
                </div>
            </div>
          </section>
        </div>
        let btn = document.createElement ('button'),
        btn.innerHTML = 'Sign the Petition';
        btn.type = 'submit';
        btn.name = 'formBtn';
        document.body.appendChild(btn);
      </div>
      {/* </div> */}

      {/* </div> */}
    </>
    
  );
};
export default Home;
