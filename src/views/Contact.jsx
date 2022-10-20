import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import logo from './architecture.jpg'
import wa from '../assets/social/whatsapp.png'
import linkedin from '../assets/social/linkedin.png'
import instagram from '../assets/social/instagram.png'

import {useQuery} from '@apollo/client'
import {GET_CONTACT_ADDRESS} from '../graphql/queries'
import {documentToHtmlString} from '@contentful/rich-text-html-renderer'
import {Markup} from 'interweave'

function Contact() {
  let {loading, error, data, refetch} = useQuery(GET_CONTACT_ADDRESS, {
    fetchPolicy: 'network-only',
  })
  const [richText, setRichText] = useState('')

  useEffect(() => {
    let a = document.querySelector('.nav-container').style
    a.display = 'block'
    a.position = 'absolute'
    a.top = '0px'
  }, [])

  useEffect(() => {
    if (data) {
      setRichText(documentToHtmlString(data.staticData.content.json))
    }
  }, [data])

  const adminEmail = 'aamuzakii@gmail.com'

  const handleSubmit = (e) => {
    e.preventDefault()
    let templateParams = {
      admin_email: adminEmail,
      customer_name: 'Budi ini dr obj',
      customer_subject: 'Test Email Inquiry',
      customer_email: 'real-customer@gmail.com',
      customer_message: 'Apakah email ini diterima?',
    }

    emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE, templateParams, process.env.REACT_APP_EMAILJS_PUBLIC_KEY).then(
      (result) => {
        alert('Message Sent. ', result.text)
      },
      (error) => {
        alert('An error occurred: ', error.text)
      },
    )
  }

  return (
    <div className="container contact">
      <div className="text-container">
        <div className="address p_y_20">
          <Markup content={richText} />
          <div className="mt100 socmed-logo-container">
            <img className="socmed-logo" src={wa} alt="wa" width={40} />
            <img className="socmed-logo" src={linkedin} alt="wa" width={40} />
            <img className="socmed-logo" src={instagram} alt="wa" width={40} />
          </div>
        </div>
        <div className="form p_y_20">
          <h3>Get in Touch</h3>
          <div action="" style={{}} className="sss">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
            <button className="learn-more">Send</button>
          </div>
        </div>
      </div>

      <div className="img-container">
        <img className="right-img" width="800" height="940" src={logo} alt="about" />
      </div>
    </div>
  )
}

export default Contact
