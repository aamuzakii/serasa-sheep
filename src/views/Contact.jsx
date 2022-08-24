import React from 'react'
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser'
import logo from './architecture.jpg';

function Contact() {

  const adminEmail = "aamuzakii@gmail.com"

  const handleSubmit = (e) => {
    e.preventDefault();
    let templateParams = {
      admin_email: adminEmail,
      customer_name: "Budi ini dr obj",
      customer_subject: "Test Email Inquiry",
      customer_email: "real-customer@gmail.com",
      customer_message: "Apakah email ini diterima?"
    }

    emailjs.send( process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE, templateParams, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
    .then((result) => {
      alert("Message Sent. ", result.text);
    }, (error) => {
      alert("An error occurred: ", error.text); 
    });
  };

  const address = `Jl. Manyar III Blok O-3 Kav. 29-30 No. 4-6 Bintaro Jaya sektor I Jakarta Selatan 12330 Indonesia`
  const telp = "telp. +62 21 735 3338"
  const email = "email. admin@andramatin.com"
  const opp = "opportunities. intern@andramatin.com"

  return (
    <div className="container contact">
      <div className='text-container' >
        <div className='address p_y_20' >
          <p>{address}</p>
          <p>{telp}</p>
          <p>{email}</p>
          <p>{opp}</p>
        </div>
        <div className='form p_y_20' >
          <h3>Get in Touch</h3>
          <div action="" style={{  }}  >
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Subject"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
            <button onClick={handleSubmit} >Send</button>
          </div>
        </div>
      </div>

      <div className='img-container'>
        <img className='right-img' width="800" height="940" src={logo} alt="about" />
      </div>
    
    </div>
  )
}

export default Contact