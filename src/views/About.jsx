import React from 'react'

function About() {

  const text = 'Andra Matin both the man and the firm, andramatin, are known for their clean and modern approach to architecture. The works of andramatin has been a constant reflection of contemporary take on traditional values, that are based on its context and its sensitivity to the environment. Aside from his architectural projects, Andra Matin is also one of the founders of Arsitek Muda Indonesia (AMI – eng: Young Architects of Indonesia), and has been a part of the progress in Indonesian architecture. He also have released books under a.publication that opens up discussions about architecture, along with being a frequent lecturer at universities, seminars, and architectural events both in Indonesia and in international events. His latest  installation titled Elevation has been granted a Special Mention Award at the 16th Venice Biennale, for its traditional sense and its contemporary take. Inspired by his great love of travel, Andra Matin continues to search out more knowledge and experiences, in order to further celebrate the architecture of Indonesia.'
  
  return (
    <div className='container about' >
      <div>
        <img width="500" src="https://www.andramatin.com/wp-content/themes/andramatin/assets/images/bg/about.png" alt="about" />
      </div>
      <div className='right' >{text}</div>
    </div>
  )
}

export default About