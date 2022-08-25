import * as React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logoweb_black.png'

function NavList() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    // textDecoration: "underline",
  };

  let normalStyle = {
    // color: "red",
  };

  let activeClassName = "underline";

  let arr = [
    {
      name: "projects"
    },
    {
      name: "journal"
    },
    {
      name: "about"
    },
    {
      name: "contact"
    },
  ]

  return (
    <nav className="nav-container" style={{  }} >
      <div style={{ display: 'flex', width: '100%' }}  className="inner-nav-container" >
        <NavLink
          to={'name'}
          className="nav-logo"
        >
          <img src={logo} alt="" height={30} />
        </NavLink>
        <ul style={{ display: 'flex', textDecoration: 'none', listStyleType: 'none' }} >
          {
            arr.map(({ name}) => (
              <li key={name} >
                <NavLink
                  to={name}
                  style={({ isActive }) =>
                    isActive ? activeStyle : normalStyle
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  );
}


export default NavList