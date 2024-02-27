import React, { useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
import { Navbar } from '../components/Navbar';
import "../../styles/CreatPet.css";

export const CreatPet = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('jwt-token')
    //Data of new user
    const [image, setImage] = useState();
    const [name, setName] = useState();
    const [species, setSpecies] = useState();
    const [dateOfBirth, setDateOfBirth] = useState();
    const [age, setAge] = useState();
    const [color, setColor] = useState();
    const [sterilized, setSterilized] = useState();
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [breed, setBreed] = useState();
    const [allergies, setAllergies] = useState();
    const [aditional_info, setAdditionalInfo] = useState();
    const [doctor_notes, setDoctorNotes] = useState();
    const [status, setStatus] = useState();

    

const handleSub = (e) => {
    e.preventDefault();
    const inputs_pet = { image, name, species, dateOfBirth, age, color, sterilized, weight, height, breed, allergies, aditional_info, doctor_notes, status };
    console.log(inputs_pet);

    //URL API REGISTER 
    const url_ = "http://localhost:5007/postman/create-pet";
    //API PETITION
    const requestPets = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + token //authorization token
        },
        body: JSON.stringify(inputs_pet) // TO JSON
    };
    //PETITION 
    fetch(url_, requestPets,
        )
        .then(response => {
            // VERIFYING RESPONSE
            if (response.ok) {
                toast.success("Pet Created");
                navigate("/user/pets/")
            }

            //RESPONSE TO JSON
            return response.json();
        })
        .then(data => {
             
            console.log("Pet Created", data);
             
        })
        .catch(error => {
            //ERROR
            /*  toast.error("Failed :" +error.message); */
            /* console.error(error) */
        })
};

    const uploadImage = async (e)=> {
    const file = e.target.files[0];
    /* console.log(e); */
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "Preset_react");

    const response = await axios.post(
        "http://api.cloudinary.com/v1_1/duiu0tlxw/image/upload",
        data
    );
    /* console.log(response.data);  */

   setImage(response.data.secure_url);
};





return (
    <>
        <Navbar />
        <div className="offset-lg-3 col-lg-6">
            <form className="container" onSubmit={handleSub}>
                <div className="card">
                    <div className="card-header">
                        <h1 className="Register">Create Pet</h1>
                               <div className='round'>
                               <FontAwesomeIcon icon={faCamera} />
                                <label className="form-label">Image</label>
                                <input type="file" accept='image/*' onChange={uploadImage} />
                                {image && (
                                    <div> <img src= {image} /></div>
                                )}
                            </div>
                            <div id="first" className="row">
                            <div className="col-4">
                                <label className="fullname">Name</label>
                                <input value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <div className="col-4">
                                <label className="form-label">Species</label>
                                <input value={species} onChange={e => setSpecies(e.target.value)} type="text" />
                                </div>
                            </div>
                            <div id="first" className="row">
                            <div className="col-4">
                                <label className="email">Date of birth</label>
                                <input value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)} type='date' />
                            </div>
                            <div id="first" className="col-4">
                                <label className="form-label">Age</label>
                                <input value={age} onChange={e => setAge(e.target.value)} type='number' />
                            </div>
                            </div>
                        <div id="first" className="row">
                            
                            <div className="col-6">
                                <label className="form-label">Color</label>
                                <input value={color} onChange={e => setColor(e.target.value)} type='text' />
                            </div>
                            <div className='col-lg-6'>
                        <label className="form-label">Sterilized</label>
                            <select  onChange={e => setSterilized(e.target.value)} type="text">
                                    <option value= "true" >Sterilized</option>
                                    <option value= "false" >No Sterilized</option>
                                </select>
                                </div>
                        </div>
                        <div id="first" className="row">
                            
                            <div className="col-6">
                                <label className="form-label">Weight</label>
                                <input value={weight} onChange={e => setWeight(e.target.value)} type='number' />
                            </div>
                            <div className="col-6">
                                <label className="form-label">Height</label>
                                <input value={height} onChange={e => setHeight(e.target.value)} type='number' />
                            </div>
                            <div id="first" className="row">
                            <div className="col-6">
                                <label className="form-label">Breed</label>
                                <input value={breed} onChange={e => setBreed(e.target.value)} type="text" />
                            </div>
                            <div className="col-6">
                                <label className="form-label">Allergies</label>
                                <input value={allergies} onChange={e => setAllergies(e.target.value)} type="text" />
                            </div>
                            </div>
                            <div id="first" className="row">
                            <div className="col-6">
                                <label className="form-label">Additional_info</label>
                                <input value={aditional_info} onChange={e => setAdditionalInfo(e.target.value)} type="text" />
                            </div>
                            <div className="col-6">
                                <label className="form-label">Dr. Notes</label>
                                <input value={doctor_notes} onChange={e => setDoctorNotes(e.target.value)} type="text" />
                            </div>
                            </div>
                            <div id="first" className="row">
                            <div className="col-6">
                                <label className="form-label">Status</label>
                                <select  onChange={e => setStatus(e.target.value)} type="text">
                                    <option value= "true" >Active</option>
                                    <option value= "false" >Inactive</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <div className='access'>
                            <button className="access-b" type="submit">Access</button>
                        </div>
                        </div>
                    
                </div>
            </form>
        </div>
    </>
);
}


