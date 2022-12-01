import "./Navbar.css"
import { NavLink } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useTheme } from "../../hooks/useTheme";

export const Navbar = () => {
  const {color, changeColor} = useTheme()
  return (
    <div className="navbar" style={{background: color}}>
        <nav onClick={() => changeColor('pink')}>
            <NavLink  to="/" className="brand"> <h1 >My Cooking</h1> </NavLink>
            <SearchBar></SearchBar>
            <NavLink  to="/create"> Create Recipe </NavLink>
        </nav>
    </div>
  )
}
