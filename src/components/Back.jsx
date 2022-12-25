import React from 'react'
import icon from '../assets/left_arrow.png'
import style from './Back.module.scss'

const Back = ({destination = 'projects'}) => {
  return (
    <a href={'/' + destination}>
      <div className={style.container}>
        <img src={icon} alt="" className={style.img} height={20} />
        <p className={style.txt}>Back</p>
      </div>
    </a>
  )
}

export default Back
