import React from 'react'
import './Location.css'
import location from '../../assets/location.png'

const Location = () => {
  return (
    <div>
        <div className="location-containeri">
              <div className="images">
                 <img src={location} alt="" />
        </div>
        </div>
      
    </div>
  )
}

export default Location