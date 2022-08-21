import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='container' >
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
        <form action="" style={{  }} >
          <input type="text" placeholder="Name"/>
          <input type="text" placeholder="Email"/>
          <input type="text" placeholder="Subject"/>
          <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact