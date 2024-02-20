import React from 'react'
import "../../styles/PatientsClinicalRecordS.css";

export const PatientsClinicalRecordS = () => {
  return (
    <>
          <div className='title'>
      <h1>Patiens Clinical Record</h1>
      </div>
      <div className='card'>
      <div className='container'>
        <img className='box'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GCtZMzmnVwuqdgNzniwrRQhYuPHXziD8TQ&usqp=CAU"/>
        <h3>Name: Mila  Species: Canine</h3>
        <h3>Species: Canino</h3>
        <h3>Date of birth: </h3>
        <h3>Name: Mila Species: Canine</h3>
        <h3>Name: Mila Species: Canine</h3>

    
<div className='input-alive'>
        <input type="radio" name="gender" value="alive" className='app-check'></input>
        <label>Alive</label>
        <input type="radio" name="gender" value="deceased" className='app-check'></input>
        <label>Deceased</label>
        </div>
<div className='text-a'>
      <textarea className="area-text"  placeholder='Type here..'/><br/>
      <p>Dr. Notes</p>
      <textarea className="area-text"  placeholder='Type here..'/><br/>
      <p>Aditional Information</p>
      <textarea className="area-text"  placeholder='Type here..'/><br/>
      </div>
      </div>
      </div>
    </>
  )
}
/* export default PatientsClinicalRecordS;   */