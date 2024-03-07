import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import "../../styles/TopNavbar.css";

const TopNavbar = () => {
const navigate = useNavigate()
const [menuOpen, setMenuOpen] = useState(false)
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
};
    return (
      <nav>
      <div className="doolittles"><img id="logo-img" src="https://t4.ftcdn.net/jpg/04/17/87/67/360_F_417876741_pofg19rDWTv6ZmgQ8qTOgVMJ0H3N2uPh.jpg" width="55" alt="Doolittles"/><h1 >Doolittles</h1></div>
      <div className="menu" onClick={() =>{
        setMenuOpen(!menuOpen)
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
        <ul className={menuOpen ? "open" : "" }>
          <li><Link onClick={() => scrollToSection('section1')}>About Us</Link></li> 
          <li><Link onClick={() => scrollToSection('section2')}>Mission and Vission</Link></li>
          <li><Link onClick={() => scrollToSection('section3')}>Our Clients</Link></li>
          <li><Link onClick={() => scrollToSection('section4')}>Contact</Link></li>
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