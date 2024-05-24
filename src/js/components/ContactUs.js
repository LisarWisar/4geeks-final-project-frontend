import React from 'react'
import "../../styles/ContactUs.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons';


export const ContactUs = () => {
  return (
    <div className="contact" id="section4">
      <div className="cont text-center">
        <div className="row">
          <div className="col">
            <p> <i className="bi bi-whatsapp" style={{ color: "green" }}></i>&nbsp;+569 0001 1524 00</p>
          </div>
          <div className="col">
            <p> <FontAwesomeIcon icon={faLocationDot} style={{ color: "black" }} />&nbsp;Whitehall, London, UK</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p> <FontAwesomeIcon icon={faPhoneVolume} style={{ color: "black" }} />&nbsp;+421 12548 86288</p>
          </div>
          <div className="col">
            <p> <FontAwesomeIcon icon={faEnvelope} style={{ color: "red" }} />&nbsp;dolittles@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;