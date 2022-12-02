import "./Navbar.css"
import { NavLink } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useTheme } from "../../hooks/useTheme";

export const Navbar = () => {
  const {color} = useTheme()
  return (
    <div className="navbar" style={{background: color}}>
        <nav>
            <NavLink  to="/" className="brand"> <h1 >My Cooking</h1> </NavLink>
            <SearchBar></SearchBar>
            <NavLink  to="/create"> Create Recipe </NavLink>
        </nav>
    </div>
  )
}
