import "./Navbar.css"
import { NavLink } from "react-router-dom";

import React from 'react'

export const Navbar = () => {
  return (
    <div className="navbar">
        <nav>
            <NavLink  to="/"> <h1>My Cooking</h1> </NavLink>
            <NavLink  to="/create"> Create Recipe </NavLink>
        </nav>
    </div>
  )
}
