import React, {useEffect} from 'react'

function About() {

  useEffect(() => {
    let a = document.querySelector(".nav-container").style
    a.position = "absolute"
    a.top = "20px"
  }, [])

  const text = 'Andra Matin both the man and the firm, andramatin, are known for their clean and modern approach to architecture. The works of andramatin has been a constant reflection of contemporary take on traditional values, that are based on its context and its sensitivity to the environment. Aside from his architectural projects, Andra Matin is also one of the founders of Arsitek Muda Indonesia (AMI – eng: Young Architects of Indonesia), and has been.'
  
  return (
    <div className='container about' >
      <div className='img-container' >
        <img src="https://res.cloudinary.com/dm9ufmxnq/image/upload/v1661134662/residence-g332670919_1920_jnlps6.jpg" alt="about" />
      </div>
      <div className='right' >
        <h1 style={{ fontSize: 60 }} >About Us</h1>
        <p  style={{ fontWeight: 100 }}>{text}</p>
      </div>
    </div>
  )
}

export default About