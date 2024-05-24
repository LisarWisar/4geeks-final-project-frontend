import React, { useEffect, useState, useContext } from 'react'
import { Context } from "../store/context"
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPencil} from '@fortawesome/free-solid-svg-icons';
import "../../styles/PatientsClinicalRecordSpecific.css";
import { Navbar } from '../components/Navbar';

export const PatientsClinicalRecordSpecific = () => {
  const  { store, actions }= useContext(Context)

  let {id} = useParams() 
  console.log("mensaje",id)


  useEffect(()=> {
    actions.getPatient(id)

  }, [])
  console.log("store patient",store.patient)
 
  return (
    <>
      <Navbar />
      <div className='tittle-pet'>
        <h1>Patiens Clinical Record</h1>
      </div>
      <div className='card-box'>
        <div className='container-box'>
          <div className="row">
            <div className="col-3">
              <div className="ratio" id="image-patient">
                  <img id="img-radius"src={store?.patient.image}></img>
              </div>
            </div>
            <div className="col-8">
                <div id="data-pet" className="row">
                    <div className="col-6">Name:  {store?.patient.name}</div>
                    <div className="col-6">Species: {store?.patient.species}</div>
                    <div className="col-6">Date of birth: {store?.patient.date_of_birth}</div>
                    <div className="col-6">Age: {store?.patient.age}</div>
                    <div className="col-6">Color: {store?.patient.color}</div>
                    <div className="col-6">Owner: {store?.patient.user_id}</div>
                    <div className="col-6">Sterilized: {store?.patient.sterilized ? 'Yes': 'No'}</div>
                    <div className="col-6">Weight: {store?.patient.weight}</div>
                    <div className="col-6">Breed: {store?.patient.breed}</div>
                    <div className="col-6">Allergies: {store?.patient.allergies}</div>
                    <div  value= "false">Status: {store?.patient.status ? "Alive": "Deceased"}</div>
                </div>
            </div>
          </div>
          <div className='text-a'> 
            <p>Dr. Notes <FontAwesomeIcon icon={faPencil} /></p>
            <textarea readOnly className="area-text"  placeholder={store?.patient.doctor_notes}/><br/>
              <p>Aditional Information</p>
            <textarea readOnly className="area-text"  placeholder={store?.patient.aditional_info}/><br/>
          </div>
        </div>
      </div>
    </>
  )
}
export default PatientsClinicalRecordSpecific;  