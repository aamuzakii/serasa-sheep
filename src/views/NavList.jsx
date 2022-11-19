import * as React from 'react'
import {useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../assets/horizontal_new_logo.png'

function NavList() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    // textDecoration: "underline",
  }

  let normalStyle = {
    // color: "red",
  }

  let activeClassName = 'underline'

  let arr = [
    {
      name: 'Projects',
    },
    {
      name: 'Journal',
    },
    {
      name: 'About',
    },
    {
      name: 'Contact',
    },
  ]

  return (
    <nav className="nav-container" style={{}}>
      <div style={{display: 'flex', width: '100%'}} className="inner-nav-container">
        <NavLink to={''} className="nav-logo">
          {document.body.clientWidth > 768 ? <img src={logo} alt="" height={40} /> : <img src={logo} alt="" height={25} />}
        </NavLink>
        <ul className="right">
          {arr.map(({name}) => (
            <li key={name}>
              <NavLink to={name.toLowerCase()} style={({isActive}) => (isActive ? activeStyle : normalStyle)}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavList
