import React from 'react'
import './Contact.css'
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
    <motion.div
      className="container contact"
      initial={{ opacity: 0.5, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
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
        <form action="" style={{  }} onSubmit={handleSubmit} >
          <input type="text" placeholder="Name"/>
          <input type="text" placeholder="Email"/>
          <input type="text" placeholder="Subject"/>
          <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </motion.div>
  )
}

export default Contact