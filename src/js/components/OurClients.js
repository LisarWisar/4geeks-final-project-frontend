import React from 'react'
import "../../styles/OurClients.css";

export const OurClients = (props) => {
  return (

    <div className='container-img'>
{/*     <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      </div> */}
    <img className='image-client'
    src={require(`../images/client-${props.image}.jpg`)} alt='client1' />
  </div>

  )
}
export default OurClients;