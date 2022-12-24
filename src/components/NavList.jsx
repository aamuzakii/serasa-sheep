import * as React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../assets/impossible_logo.png'

function NavList() {
  let arr = [
    {
      name: 'Projects',
    },
    {
      name: 'Journals',
    },
    {
      name: 'Awards',
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
            <li key={name}>
              <NavLink to={name.toLowerCase()}>{name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavList
