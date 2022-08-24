import React from 'react'

function About() {

  const text = 'Andra Matin both the man and the firm, andramatin, are known for their clean and modern approach to architecture. The works of andramatin has been a constant reflection of contemporary take on traditional values, that are based on its context and its sensitivity to the environment. Aside from his architectural projects, Andra Matin is also one of the founders of Arsitek Muda Indonesia (AMI – eng: Young Architects of Indonesia), and has been.'
  
  return (
    <div className='container about' >
      <div>
        <img width="1200"  src="https://res.cloudinary.com/dm9ufmxnq/image/upload/v1661134662/residence-g332670919_1920_jnlps6.jpg" alt="about" />
      </div>
      <div className='right' >
        <h1 style={{ fontSize: 60 }} >About Us</h1>
        <p  style={{ fontWeight: 100 }}>{text}</p>
        <button className='learn-more'>Learn More</button>
      </div>
    </div>
  )
}

export default About