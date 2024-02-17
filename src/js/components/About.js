import React from 'react'
import "../../styles/About.css";
export const About = () => {
  return (
  <>
  <div className="container">
    <div className="content-section">
    <div className="title">
    <h1>About Us</h1>
    </div>
    <h2>Welcome to Doolittles</h2>
    <div className="content">
      <p>
       At Doolittles, we are passionately dedicated to providing the highest quality medical care for your loyal furry companions. We are proud to offer a wide range of veterinary services, including preventative care, vaccinations, surgery, dental care, geriatric health care and much more. Whatever your pet's needs, you can trust us to provide the highest level of care and compassion.
      </p>
      <div className="image-section">
        <img className= "about-image" src="https://aldf.org/wp-content/uploads/2018/06/GettyImages-879798260-e1560171751629.jpg" />
      </div>
      </div>
    </div>
    </div>
  </>
  )
}
export default About;

