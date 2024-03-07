import React from 'react'
import "../../styles/About.css";
import imageAbout from "../images/3images.png";
export const About = () => {
  return (
  <>
  <div className="container">
    <div className="content-section">
    <div className="title">
    <h1 id="section1">About Us</h1>
    </div>
    </div>
    </div>
    <section className='about'>
      <div className='main'>
        <img  className="about-image" src={ imageAbout }/>
        <div className="all-text">
        <h1>Welcome to Doolittles</h1>
       <p>
       At Doolittles, we are passionately dedicated to providing the highest quality medical care for your loyal furry companions. We are proud to offer a wide range of veterinary services, including preventative care, vaccinations, surgery, dental care, geriatric health care and much more. Whatever your pet's needs, you can trust us to provide the highest level of care and compassion.
      </p>
      </div>
      </div>
      </section>
      

  </>
  )
}
export default About;

