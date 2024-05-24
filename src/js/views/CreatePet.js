import React, { useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { Navbar } from '../components/Navbar';
import "../../styles/CreatePet.css";

export const CreatePet = () => {
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
        const url_ = "http://localhost:5007/user/create-pet";
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

    const uploadImage = async (e) => {
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
            <div className='body'>
                <div className='containerReg'>
                    <div className="titleCreat">
                        Create Pet
                    </div>
                    <form action="#" onSubmit={handleSub}>
                        <div className='round'> 
                            <input type="file" accept='image/*' onChange={uploadImage}/>
                            <FontAwesomeIcon icon={faCamera}/>
                            {image && (
                                <div> <img id="img-u" src={image} /></div>
                            )}
                        </div>
                        <div className='user-details'>
                            <div className="input-box">
                                <span className="details">Name</span>
                                <input value={name} onChange={e => setName(e.target.value)} />      
                            </div>
                            <div className="input-box">           
                                <span className="form-span">Species</span>
                                <input value={species} onChange={e => setSpecies(e.target.value)} type="text" />
                            </div>
                            <div className="input-box">
                                <span className="email">Date of birth</span>
                                <input value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)} type='date' />
                            </div>
                            <div className="input-box">
                                <span className="form-span">Age</span>
                                <input value={age} onChange={e => setAge(e.target.value)} type='number' />
                            </div>
                            <div className="input-box">
                                <span className="form-span">Color</span>
                                <input value={color} onChange={e => setColor(e.target.value)} type='text' />
                            </div>
                            <div className="input-box">
                                <span className="form-span">Sterilized</span>
                                <select onChange={e => setSterilized(e.target.value)} type="text">
                                    <option value="true" >Sterilized</option>
                                    <option value="false" >No Sterilized</option>
                                </select>     
                            </div>   
                            <div className="input-box">                        
                                <span className="form-span">Weight</span>
                                <input value={weight} onChange={e => setWeight(e.target.value)} type='number' />  
                            </div>
                            <div className="input-box">                                                           
                                <span className="form-span">Height</span>
                                <input value={height} onChange={e => setHeight(e.target.value)} type='number' /> 
                            </div>   
                            <div className="input-box">                                                           
                                <span className="form-span">Breed</span>
                                <input value={breed} onChange={e => setBreed(e.target.value)} type="text" />    
                            </div>  
                            <div className="input-box">                                                         
                                <span className="form-span">Allergies</span>
                                <input value={allergies} onChange={e => setAllergies(e.target.value)} type="text" /> 
                            </div> 
                            <div className="input-box">                                                            
                                <span className="form-span">Additional_info</span>
                                <input value={aditional_info} onChange={e => setAdditionalInfo(e.target.value)} type="text" />  
                            </div>       
                            <div className="input-box">                                                          
                                <span className="form-span">Dr. Notes</span>
                                <input value={doctor_notes} onChange={e => setDoctorNotes(e.target.value)} type="text" />   
                            </div> 
                            <div className="input-box">                                                     
                                <span className="form-span">Status</span>
                                <select onChange={e => setStatus(e.target.value)} type="text">                     
                                    <option value="true" >Active</option>
                                    <option value="false" >Inactive</option>
                                </select>      
                            </div>                            
                        </div>
                        <div className='button'>
                            <input className="access-b" type="submit" value="Create" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}


