import React, { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaw} from '@fortawesome/free-solid-svg-icons';
import { Context } from "../store/context";
import { useNavigate } from "react-router-dom";
import { Navbar } from '../components/Navbar';
import "../../styles/UserPetListed.css";

export const UserPetListed = () => {
  const navigate = useNavigate();

  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getUserPetList();
  }, []);
  console.log("store user pet listed", store.petList);


  let listPet = store?.petList;

  return (
    <div>
      <Navbar/>
      <div className='tittle-your-pets'>
      <h1>Your Pets</h1>
      <button                         onClick={() => {
                          navigate(`/user/pets/add-new-pet`);
                        }} className="add-pet">Add New Pet</button>
      </div>
      
      {listPet.map(pet => (
        <>
          <div className="card-box">
            <div className="col-8 px-3 py-2 userPetList">
              <div className="row">
                <div className="col-3">
                  <div className="ratio ratio-1x1">
                    <img id="img-user-pet"src={pet.image}></img>
                  </div>
                </div>
                <div className="col-9">
                  <div id="data-pet-list" className="row">
                    <div className="col-8 px-3 py-2"><FontAwesomeIcon id="icon-pet"icon={faPaw}/>Name: {pet?.name}</div>
                    <div className="col-8 px-3 py-2"><FontAwesomeIcon  id="icon-pet" icon={faPaw} />Species: {pet?.species}</div>
                    <div className="col-6"><FontAwesomeIcon  id="icon-pet" icon={faPaw} />Age: {pet?.age}</div>

                </div>
              </div>

                  </div>
                  <div className="button-appo">
                    <button
                        onClick={() => {
                          navigate(`/vet/clinical-records/${pet.pet_id}`);
                        }}
                      >
                        Clinical Records
                      </button>
                  </div>
            </div>
          </div>
        </>
      ))}
    </div> 
  );
  
};
