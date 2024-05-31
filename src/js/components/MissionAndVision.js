import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faRocket } from "@fortawesome/free-solid-svg-icons";
import "../../styles/MissionAndVision.css";

export const MissionAndVision = () => {
  return (
    <>
      <div className="title-mission">
        <h1 id="section2">Mission and Vision</h1>
      </div>
      <div className="container-all">
        <div className="row" id="conten">
          <div className="col-md-4">
            <div className="about-item text-center">
              <FontAwesomeIcon icon={faRocket} />
              <h2 className="mission-title">Mission</h2>
              <hr />
              <p>
                Our mission is to provide high-quality medical and preventative
                care for pets, with a focus on comprehensive animal health and
                well-being. We are committed to offering ethical veterinary
                services, based on scientific evidence and compassionate care,
                with the goal of improving and maintaining the quality of life
                of pets and strengthening the bond between people and their
                animals. Additionally, we strive to educate our clients about
                the importance of preventative care and responsible handling of
                their pets, thus promoting a community aware of and committed to
                animal welfare.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-item text-center" id="pad">
              <FontAwesomeIcon icon={faEye} />
              <h2 className="vision-title">Vision</h2>
              <hr />
              <p>
                To be recognized as leaders in animal care and well-being,
                providing quality health services with a comprehensive and
                compassionate approach. We strive to build strong relationships
                with our clients and their pets, offering a welcoming and
                professional environment where each animal receives personalized
                and loving care. Our goal is to promote the health and happiness
                of pets, thus contributing to a healthier and more harmonious
                community for all living beings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
export default MissionAndVision;