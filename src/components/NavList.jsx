import * as React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../assets/impossible_logo.png'
import style from './NavList.module.scss'

function NavList() {
  const blinkOnConstruction = localStorage.getItem('blinkOnConstruction')
  let arr = [
    {
      name: 'Projects',
    },
    {
      name: 'Construction',
      featureDeliveredDate: 'December 2023',
    },
    {
      name: 'Journals',
    },
    {
      name: 'About',
    },
    {
      name: 'Contact',
    },
  ]

  return (
    <nav className="nav-container">
      <div style={{display: 'flex', width: '100%'}} className="inner-nav-container">
        <NavLink to={''} className="nav-logo">
          {document.body.clientWidth > 768 ? <img src={logo} alt="" height={30} /> : <img src={logo} alt="" height={21} />}
        </NavLink>
        <ul className="right">
          {arr.map(({name}) => (
            <li key={name} onClick={() => localStorage.setItem('blinkOnConstruction', 'off')}>
              <NavLink to={name.toLowerCase()}>{name}</NavLink>
              {name === 'Construction' && localStorage.getItem('blinkOnConstruction') === 'on' && <span className={style.new}>NEW</span>}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavList
