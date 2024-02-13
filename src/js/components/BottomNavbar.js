import React from "react";
import "../../styles/BottomNavbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';


const BottomNavbar = () => {
    return(
    
        
    <div className="map-section">
            <div className="gmap-frame">
            <iframe width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=London%20SW1A%202ET,%20United%20Kingdom+(Doolittles)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
            </div>
            <div className="navb">
            <div className="row">
            <div className="col">
                <p>Copyright © newworldprogramers.com </p>
                </div>
                <div className="col">
                <p><FontAwesomeIcon icon={faHouse} />Whitehall, London, UK</p>
                </div>
                </div>
                </div>
            </div>
            

    )
}
export default BottomNavbar;