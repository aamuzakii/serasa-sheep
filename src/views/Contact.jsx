import React, {useState, useEffect} from 'react'
import emailjs from '@emailjs/browser'
import sideImg from '../assets/eagle.png'
import wa from '../assets/social/whatsapp.png'
import instagram from '../assets/social/instagram.png'

import {useQuery} from '@apollo/client'
import {GET_CONTACT_ADDRESS} from '../graphql/queries'
import {documentToHtmlString} from '@contentful/rich-text-html-renderer'
import {Markup} from 'interweave'
import middleware from '../helper/middleware'

function Contact() {
  let {data} = useQuery(GET_CONTACT_ADDRESS, {})
  const [richText, setRichText] = useState('')

  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    middleware('foo')
  }, [])

  useEffect(() => {
    if (data) {
      setRichText(documentToHtmlString(data.staticData.content.json))
    }
  }, [data])

  const destinationEmail = process.env.REACT_APP_ADMIN_EMAIL || 'aamuzakii@gmail.com'

  const handleSubmit = (e) => {
    e.preventDefault()
    let templateParams = {
      admin_email: destinationEmail,
      customer_name: name,
      customer_subject: subject,
      customer_email: email,
      customer_message: message,
    }

    emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE, templateParams, process.env.REACT_APP_EMAILJS_PUBLIC_KEY).then(
      (result) => {
        alert('Message Sent. ', result.text)
        setName('')
        setSubject('')
        setEmail('')
        setMessage('')
      },
      (error) => {
        alert('An error occurred: ', error.text)
      },
    )
  }

  const handleChgName = (e) => {
    setName(e.target.value)
  }
  const handleChgEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleChgSubject = (e) => {
    setSubject(e.target.value)
  }
  const handleChgMSg = (e) => {
    setMessage(e.target.value)
  }

  return (
    <div className="container contact">
      <div className="text-container">
        <div className="address p_y_20">
          <Markup content={richText} />
          <div className="mt100 socmed-logo-container">
            <a href="https://wa.me/6281260003621" rel="noopener noreferrer" target="_blank">
              <img className="socmed-logo" src={wa} alt="wa" width={40} height={40} />
            </a>
            <a href="https://www.instagram.com/serasa.architect/" rel="noopener noreferrer" target="_blank">
              <img className="socmed-logo" src={instagram} alt="ig" width={40} height={40} />
            </a>
          </div>
        </div>
        <div className="form p_y_20">
          <h3>Get in Touch</h3>
          <div action="" className="sss">
            <input type="text" placeholder="Name" onChange={handleChgName} value={name} />
            <input type="text" placeholder="Email" onChange={handleChgEmail} value={email} />
            <input type="text" placeholder="Subject" onChange={handleChgSubject} value={subject} />
            <textarea name="" id="" cols="30" rows="10" placeholder="Message" onChange={handleChgMSg} value={message}></textarea>
            <button className="learn-more" onClick={handleSubmit}>
              Send
            </button>
          </div>
        </div>
      </div>

      <img className="right-img" src={sideImg} alt="about" />
    </div>
  )
}

export default Contact
