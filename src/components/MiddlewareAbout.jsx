import React from 'react'
import {useNavigate} from 'react-router-dom'
import style from './About.module.scss'
import Image from './Image'

const MiddlewareAbout = () => {
  let navigate = useNavigate()

  const goToTeam = () => {
    navigate('/team')
  }
  const goToCompany = () => {
    navigate('/awards')
  }
  return (
    <div className={style.mid_container_raja}>
      <h1 className={style.title}>About</h1>
      <div className={style.mid_container}>
        <div className={style.parent}>
          <p className={style.small_text} onClick={goToTeam}>
            TEAM
          </p>
          <img className={style.inner_img} height={500} width={500} src={'../../images/team.png'} alt="" size={500} />
        </div>
        <div className={style.parent}>
          <p className={style.small_text} onClick={goToTeam}>
            AWARD
          </p>
          <img className={style.inner_img} height={500} width={500} src={'../../images/award.png'} alt="" size={500} />
        </div>
      </div>
    </div>
  )
}

export default MiddlewareAbout
