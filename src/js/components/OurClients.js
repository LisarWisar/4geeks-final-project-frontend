import React from 'react'
import "../../styles/OurClients.css";

export const OurClients = () => {
  return (
    <>
      <div className="title-h1">
        <h1 className='h1-title' id="section3">Our Clients</h1>
      </div>
      <div className="container">
        <div className="top-images">
          <img src={require("../images/client-1.jpg")} alt="client-1" width={"350px"} height={"250px"} />
          <img src={require("../images/client-2.jpg")} alt="client- 2" width={"350px"} height={"250px"} />
          <img src={require("../images/client-3.jpg")} alt="client- 3" width={"350px"} height={"250px"} />
        </div>
      </div>
      <div className="container">
        <div className="bottom-images">
          <img src={require("../images/client-4.jpg")} alt="client- 4" width={"350px"} height={"250px"} />
          <img src={require("../images/client-5.jpg")} alt="client- 5" width={"350px"} height={"250px"} />
          <img src={require("../images/client-6.jpg")} alt="clien-6" width={"350px"} height={"250px"} />
        </div>
      </div>
    </>
  )
}

export default OurClients;
