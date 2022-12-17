import * as React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/impossible_logo.png'

function NavList() {

  let arr = [
    {
      name: '/Projects',
    },
    {
      name: '/Journal',
    },
    {
      name: '/About',
    },
    {
      name: '/Contact',
    },
  ]

  return (
    <nav className="nav-container2" >
      <div style={{ display: 'flex', width: '100%' }} className="inner-nav-container">
        <NavLink to={''} className="nav-logo">
          {document.body.clientWidth > 768 ? <img src={logo} alt="" height={30} /> : <img src={logo} alt="" height={20} />}
        </NavLink>
        <ul className="right">
          {arr.map(({ name }) => (
            <li key={name}>
              <NavLink to={name} >
                {name.split('/')[1]}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavList
