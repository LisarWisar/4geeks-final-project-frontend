import React, { useEffect, useState, useContext } from 'react'
import { Context } from "../store/context"
import { useNavigate } from 'react-router-dom';
import "../../styles/UserPetListed.css";


export const UserPetListed = () => {
  const navigate = useNavigate()
  const { store, actions } = useContext(Context)

  useEffect(() => {
    actions.getUserPetList()

  }, []);
  console.log("store user pet listed", store.petList);

   let listPet = store.petList

  return (
    listPet.map(listPet => (
    <>
    <div className='userPetListTitle'>
    <p>Your Pets</p>
    </div>
    <div className='card-box'>
    <div className="col-8 px-3 py-2 userPetList">
    <div className="row">
        <div className="col-3">
            <div className="ratio ratio-1x1">
                <img src={listPet.image}></img>
            </div>
        </div>
        <div className="col-9">
            <div id="data-pet-list"className="row">
                <div className="col-8 px-3 py-2">Name:{listPet?.name}</div>
                <div className="col-8 px-3 py-2">Species:{listPet?.species}</div>
                <div className="col-6">Age:{listPet?.age}</div>
                <button className="button-appo" onClick={() => {navigate(`/vet/clinical-records/${store.pet_id}`)}}>Appointments</button>
            </div>
      </div>
    </div>
    </div>
    </div>
    </>
 ))
    )
}