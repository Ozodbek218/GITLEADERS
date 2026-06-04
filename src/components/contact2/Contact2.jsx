import React from 'react'
import './Contact2.css'
import a1 from '../../assets/contact.jpg'
const Contact2 = () => {
  return (
    <div>
        <div className="contact-conteiner" style={{backgroundImage:`url(${a1})`}}>
            <div className="confusing">
                <h1>Confusing homework?</h1>
                <p>Get expert help with any course or subject</p>
                  <div className="contact-btn">
                <button>Get Help</button>
            </div>
            </div>
          

        </div>
    </div>
  )
}

export default Contact2