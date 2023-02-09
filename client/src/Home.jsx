import Navbar from "./components/Navbar";
import { useState } from "react";
import image from "./images/newboywithtray.png";

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
              <span className="yellow-border">
                FREE<br/> 
                SCHOOL<br/> 
                DINNERS<br/> 
                FOR<br/> 
                EVERY<br/>
                CHILD
              </span>
            </h1>
          </div>
          {/* style={{position:"absolute", marginTop:"-180px", marginLeft: "150px"}}width={650} */}

          <section>
            <div className="left-column">

              <div className="photo-container">
                <div class="clearfix"></div>
                <img
                  src={image}
                  class="img-fluid"
                  alt="meals"
                  width="800"
                  height="600"
                />
              </div>
              <p>When children eat filling, healthy, nutritious meals, their<br/>
                health and educational outcomes improve, because they can focus<br/>
                in the classroom. Food eaten during the school day makes up<br/>
                around 20% of the entire daily meal consumption. So making sure<br/>
                the food children eat at primary school is taking place and in<br/>
                the right quantities is crucial. Making school meals free for<br/>
                all primary children is an important way to close the<br/>
                educational attainment gap in the UK.</p>
            </div>
          </section>
        </div>
      </div>
      {/* </div> */}

      {/* </div> */}
    </>
  );
};
export default Home;
