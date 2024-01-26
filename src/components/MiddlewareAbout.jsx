import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import style from './About.module.scss'
import Image from './Image'

const grey = 'rgba(0, 0, 0, 0.7231267507002801)'

const MiddlewareAbout = () => {
  let navigate = useNavigate()

  const goToTeam = () => {
    navigate('/team')
  }
  const goToCompany = () => {
    navigate('/awards')
  }

  useEffect(() => {
    const parents0 = document.getElementsByClassName(style.parent)[0]
    const layers0 = document.getElementsByClassName(style.box_gradient_layer)[0]
    const parents1 = document.getElementsByClassName(style.parent)[1]
    const layers1 = document.getElementsByClassName(style.box_gradient_layer)[1]

    parents0.onmouseover = function () {
      layers0.style.background = 'none'
    }
    parents1.onmouseover = function () {
      layers1.style.background = 'none'
    }

    parents0.onmouseout = function () {
      layers0.style.background = grey
    }
    parents1.onmouseout = function () {
      layers1.style.background = grey
    }

    return () => {
      // cleanup
    }
  }, [])

  return (
    <div className={style.mid_container_raja}>
      <h1 className={style.title}>About</h1>
      <div className={style.mid_container}>
        <div className={style.parent}>
          <p className={style.small_text}>TEAM</p>
          <div className={style.box_gradient_layer} style={{height: 500, width: 500}} onClick={goToTeam}></div>
          <img className={style.inner_img} height={500} width={500} src={'../../images/team.png'} alt="" size={500} />
        </div>
        <div className={style.parent}>
          <p className={style.small_text}>AWARD</p>
          <div className={style.box_gradient_layer} style={{height: 500, width: 500}} onClick={goToTeam}></div>
          <img className={style.inner_img} height={500} width={500} src={'../../images/award.png'} alt="" size={500} />
        </div>
      </div>
    </div>
  )
}

export default MiddlewareAbout
