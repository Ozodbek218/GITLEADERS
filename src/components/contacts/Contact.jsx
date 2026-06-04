import React from 'react'
import './Contact.css'
import { HiOutlineMail } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";


const Contact = () => {
  return (
    <div>
        <div className="contact">
            <div className="study">
                <p>Studybay / Contacts</p>
            </div>
            <div className="logosi">
                <h1>Contacts</h1>
            </div>

            <main>
                <div className="location">
                    <p><HiOutlineMail />support@studybay.ws</p>
                    <p><GrLocation />2630 Valor Dr, Glenview, IL 60026</p>
                </div>
                <div className="input1">
           <div className="emailinput">
  <div>

       <p>Name</p>
            <input type="text" />
            </div>

           <div>
    <p>Email</p>
    <input type="email" />
  </div>
</div>

<div className="massage">
  <p>Your Message</p>
  <input type="text" />
</div>
                    <div className="btn">
                        <button>Submit</button>
                    </div>
                </div>
            </main>

        </div>
    </div>
  )
}

export default Contact