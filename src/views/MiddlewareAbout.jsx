import React from 'react'
import {useNavigate} from 'react-router-dom'

const MiddlewareAbout = () => {
  let navigate = useNavigate()
  const a = 'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1667733123/crew-7cPNnx13Qpo-unsplash_amb7ty.jpg'

  const c = 'https://res.cloudinary.com/dm9ufmxnq/image/upload/v1667733434/abbe-sublett-nxZDMUQhN4o-unsplash_1_bjvcyi.jpg'

  const goToTeam = () => {
    navigate('/team')
  }
  const goToCompany = () => {
    navigate('/company')
  }
  return (
    <div className="mid-container">
      <div>
        <img src={a} alt="" onClick={goToTeam} />
        <p className="centered" onClick={goToTeam}>
          TEAM
        </p>
      </div>
      <div>
        <img src={c} alt="" onClick={goToCompany} />
        <p className="centered" onClick={goToCompany}>
          COMPANY
        </p>
      </div>
    </div>
  )
}

export default MiddlewareAbout
