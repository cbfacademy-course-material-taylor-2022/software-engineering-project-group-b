import React from 'react'
import "./Thanks.css"
import logo from './images/logo_small.png';



const thanks = () => {
  return (
    <> 
      <div className='think of a container name '>
        <div className='think of another container name for left side'> 
        <div className="image"> <img src={logo} alt="image" width={700}/>
      </div>
        </div> 

        <div className='think of a container for rightContainer'>
          <h1>Thank you for signing up</h1>
        <div className='share-button'> please share </div>
        
        </div>
     </div>
    </>
  )
}

export default thanks;