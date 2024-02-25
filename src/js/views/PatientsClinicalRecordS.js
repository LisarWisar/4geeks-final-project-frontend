import React, { useEffect, useState, useContext } from 'react'
import { Context } from "../store/context"
import { useParams } from 'react-router-dom';
import "../../styles/PatientsClinicalRecordS.css";

export const PatientsClinicalRecordS = () => {
  const  { store, actions }= useContext(Context)
  const [patients, setPatients] = useState([]);

/*    const [values, setValues] = useState({
    anamnesis: "",
    drNotes: "",
    aditionalInfo: "",
   });

   const handleInputChange = (event) => {
   const { name, value } = event.target;
      setValues({
        ...values,
        [name]: value,
      });
   };
   
    const handleForm = (event) => {
      event.preventDefault()
      console.log(values);
    }; */
      

   let {id} = useParams() 
   console.log("mensaje",id)


    useEffect(()=> {
      actions.getPatient(id)

    }, [])
 console.log("store patient",store.patient)
 
/*  console.log("este es el valor", values) */

  return (
    <>
      <div className='tittle-pet'>
      <h1>Patiens Clinical Record</h1>
      </div>
      <div className='card-box'>
      <div className='container-box'>
      <div className="row">
                            <div className="col-3">
                                <div className="ratio ratio-1x1" id="image-patient">
                                    <img src={store.patient.image}></img>
                                </div>
                            </div>
                            <div className="col-9">
                                <div id="data-pet" className="row">

                                    <div className="col-6">Name: {store?.patient.name}</div>
                                    <div className="col-6">Species: {store?.patient.species}</div>
                                    <div className="col-6">Date of birth: {store?.patient.date_of_birth}</div>
                                    <div className="col-6">Age: {store?.patient.age}</div>
                                    <div className="col-6">Color: {store?.patient.color}</div>
                                    <div className="col-6">Owner: {store?.patient.user_id}</div>
                                    <div className="col-6">Sterilized: {store?.patient.sterilized}</div>
                                    <div className="col-6">Weight: {store?.patient.weight}</div>
                                    <div className="col-6">Breed: {store?.patient.breed}</div>
                                    <div className="col-6">Allergies: {store?.patient.allergies}</div>
                                </div>
                            </div>
                        </div>
<div className='input-alive'>
        <input type="radio" name="gender" value="alive" className='app-check'></input>
        <label>Active</label>
        <input type="radio" name="gender" value="deceased" className='app-check'></input>
        <label>Inactive</label>
        </div>
        <div className='text-a'> 
        <p>Dr. Notes</p>
      <textarea  className="area-text"  placeholder={store?.patient.doctor_notes}/><br/>
      <p>Aditional Information</p>
      <textarea  className="area-text"  placeholder={store?.patient.aditional_info}/><br/>
        </div>
{/* <form action="" onSubmit={handleForm} className='text-a'>
<p>Anamnesis</p>
      <textarea name="anamenesis" value={values.anamnesis} onChange={handleInputChange} className="area-text"  placeholder='Type here..'/><br/>
      <p>Dr. Notes</p>
      <textarea type="text" name="drNotes"  onChange={handleInputChange} value={values.drNotes || ""} className="area-text"  placeholder='Type here..'/><br/>
      <p>Aditional Information</p>
      <textarea name="aditionalInfo" value={values.aditionalInfo} onChange={handleInputChange} className="area-text"  placeholder='Type here..'/><br/>

      <button type="submit">Send data</button>
      </form> */}
      </div>
      </div>
    </>
  )
}
export default PatientsClinicalRecordS;  