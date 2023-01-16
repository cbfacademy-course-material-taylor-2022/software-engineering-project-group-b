
//import Navbar from './components/Navbar.js'
import NavbarSmall from './components/NavbarSmall.js'
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './signature.css'
import image from './images/newboywithtray.png';
import './App.css'


 // SERVICES THAT CALL OUR API ENDPOINTS
//  import { getAllProfiles } from "./services/profileService";

const Signature= () => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        location: ""
    })

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        console.log('submission')
        e.preventDefault()
        try{
            const response = await axios.put('http:localhost:8080/profiles', {formData})
            console.log(response)
            const success = response.status === 2000
            if (success) navigate('/')
            //add path above

        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        console.log('e', e)
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

   return (
    <>
    <div classnName="overlay">
    <NavbarSmall
        minimal={true}
        setShowModal={() => {

        }}
        showModal={false}
    
    />
  
       <div className="container">
       <div className="background" style={{backgroundColor: 'rgb(156, 157, 157)'}}>
                 <h1><span className="yellow-border">FREE SCHOOL DINNERS</span></h1>
               <h1><span className="yellow-border2">PETITION.</span></h1>
               
               
              
           
               
                

                 <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="first_name">First Name</label>
                        <input
                        id="first_name"
                        type='text'
                        name="first_name"
                        // placeholder="First Name"
                        required={true}
                        value={formData.first_name}
                        onChange={handleChange}
                    />

                <label htmlFor="last_name">Last Name</label>
                    <input
                    id="last_name"
                    type='text'
                    name="last_name"
                    // placeholder="Last Name"
                    required={true}
                    value={formData.last_name}
                    onChange={handleChange}

                />

                <label htmlFor="email">Email</label>
                    <input
                    id="email"
                    type='text'
                    name="email"
                    // placeholder="Email"
                    required={true}
                    value={formData.email}
                    onChange={handleChange}

                />
              

                <label htmlFor="location">Location</label>
                    <input
                    id="location"
                    type='text'
                    name="location"
                    // placeholder="Location"
                    required={true}
                    value={formData.location}
                    onChange={handleChange}
                />  
                   {/* <input type="submit" className="submit-button"/> */}
                   <button className="primary-button" style={{fontSize:"40px", borderColor:"black", backgroundColor:"black", borderWidth: "10px", width: "350px", color: 'rgb(255,255,0)', marginTop: "30px", }}onClick={handleSubmit}>Sign the petition</button>
                </section>

                <section>
            
                 <div className="photo-container"><img src={image} alt="meals" style={{position:"absolute", marginTop:"-180px", marginLeft: "100px"}}width={650}/>
                </div>
              
                    </section>

            </form> 

            </div>
            </div>
            </div>
            </>
      
       
        )

   }

export default Signature;