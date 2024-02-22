import React from 'react'
import "../../styles/OurClients.css";

export const OurClients = (props) => {
  return (
    <>
    <div className='container-img'>
    <img className='image-client'
    src={require(`../images/client-${props.image}.jpg`)} alt='client1' />
  </div>
  </>
  )
}
export default OurClients;