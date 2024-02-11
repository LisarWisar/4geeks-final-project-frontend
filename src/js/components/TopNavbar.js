import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faUser} from '@fortawesome/free-solid-svg-icons';
import "../../styles/TopNavbar.css";

const TopNavbar = () => {
const navigate = useNavigate()
const [menuOpen, setMenuOpen] = useState(false)
    return (
      <nav>
      <Link><img src="https://i.pinimg.com/736x/da/6b/70/da6b7032661b3b91fcca1d3c1550bf0a.jpg" width="40" alt="Doolittles"/></Link>

      <div className="menu" onClick={() =>{
        setMenuOpen(!menuOpen)
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
        <ul className={menuOpen ? "open" : "" }>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/missionAndVission">Mission and Vission</NavLink></li>
          <li><NavLink to="/aboutTeam">About Team</NavLink></li>
          <li><NavLink to="/contactUs">Contact</NavLink></li>
          <li><a onClick={() => {
                navigate("/login")
            }}><FontAwesomeIcon icon={faUser} />Login</a></li>
          </ul>
          <div className="collapse navbar-collapse" id="navbarNav">
        </div>
      </nav>
    )
}


export default TopNavbar;