import * as React from "react";
import { NavLink } from "react-router-dom";
import './NavList.css';

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
    <nav style={{  }} >
      <ul style={{ display: 'flex', textDecoration: 'none', listStyleType: 'none' }} >
        {
          arr.map(({ name}) => (
            <li>
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
    </nav>
  );
}


export default NavList