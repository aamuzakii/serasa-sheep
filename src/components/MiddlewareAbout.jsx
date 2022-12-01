import React from 'react'
import {useNavigate} from 'react-router-dom'

const MiddlewareAbout = () => {
  let navigate = useNavigate()

  const goToTeam = () => {
    navigate('/team')
  }
  const goToCompany = () => {
    navigate('/company')
  }
  return (
    <div className="mid-container">
      <div>
        {/* <img src={a} alt="" onClick={goToTeam} /> */}
        <p className="centered" onClick={goToTeam} style={{fontSize: 30}}>
          TEAM
        </p>
      </div>
      <div>
        {/* <img src={c} alt="" onClick={goToCompany} /> */}
        <p className="centered" onClick={goToCompany} style={{fontSize: 30}}>
          COMPANY
        </p>
      </div>
    </div>
  )
}

export default MiddlewareAbout
