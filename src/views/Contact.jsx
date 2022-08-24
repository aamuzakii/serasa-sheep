import React from 'react'
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser'

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
  

  return (
    <div className="container contact">
      <div className='text-container' >
        <div className='address' >
          <p>Jl. Manyar III Blok O-3 Kav. 29-30 No. 4-6</p>
          <p>Bintaro Jaya sektor I</p>
          <p>Jakarta Selatan 12330</p>
          <p>Indonesia</p>
          <p>telp. +62 21 735 3338</p>
          <p>fax. +62 21 735 6521</p>
          <p>email. admin@andramatin.com</p>
          <p>opportunities. intern@andramatin.com</p>
        </div>
        <div className='form' >
          <h3>get in touch</h3>
          <div action="" style={{  }} onClick={handleSubmit} >
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Subject"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
            <button>Send</button>
          </div>
        </div>
      </div>

      <div>
        <img width="800" height="940" src="https://res.cloudinary.com/dm9ufmxnq/image/upload/v1661134662/residence-g332670919_1920_jnlps6.jpg" alt="about" />
      </div>
      
    </div>
  )
}

export default Contact