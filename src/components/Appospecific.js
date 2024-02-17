import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import dogo2 from "../img/dogo2.jpeg";
import dogo1 from "../img/dogo1.jpeg";
import dogo3 from "../img/dogo3.jpeg";



const Appospecific = () => {
    return (
        <div className="container mt-5 row ms-5">
            <div className="appo border col-10 ">
                <div className="">
                    <h1 className="day text-center mt-5">Thuersday 25</h1>
                    <div className="">
                        <p className="hour border text-center ">15:00</p>
                    </div>
                    <div className="text-center visit mb-5">
                        <p className="fw-light container-fluid text-left pe-1" style={{ display: 'inline' }}>Type of visit:</p>
                        <p className="fw-semibold container-fluid text-rigth ps-0" style={{ display: 'inline' }}>Vaccine</p>
                    </div>
                </div>
                <div className="row part2 text-left mb-5">

                    <div className="col-6 text-center mt-4 ps-5 dogo">
                        <img src={dogo1} alt="dogo3" id="dogo" />
                    </div>
                    <div className="details col-6 mt-5 infos">
                        <p className="fw-light container-fluid text-left pe-1" style={{ display: 'inline' }}>Veterinarian: </p>
                        <p className="fw-semibold container-fluid text-rigth ps-0" style={{ display: 'inline' }} id="vtrnrn">Pepe mojica</p><br></br>
                        <p className="fw-light container-fluid text-left pe-1" style={{ display: 'inline' }}>Pet Name: </p>
                        <p className="fw-semibold container-fluid text-rigth ps-0" style={{ display: 'inline' }} id="ptnm">cheetos</p><br></br>
                        <p className="fw-light container-fluid text-left pe-1" style={{ display: 'inline' }}>Oner Name: </p>
                        <p className="fw-semibold container-fluid text-rigth ps-0" style={{ display: 'inline' }} id="nrnm">juanito</p><br></br>
                        <p className="fw-light container-fluid text-left pe-1" style={{ display: 'inline' }}>Species: </p>
                        <p className="fw-semibold container-fluid text-rigth ps-0" style={{ display: 'inline' }} id="spcs">Alien </p><br></br>
                        <p className="fw-light container-fluid text-left pe-1" style={{ display: 'inline' }}>breed: </p>
                        <p className="fw-semibold container-fluid text-rigth ps-0" style={{ display: 'inline' }} id="brd">Unknown</p>
                    </div>

                </div>
                <div className="row container-fluid text-center">
                    <div className="col-12">
                        <p className="mb-1 fw-semibold position-relative"><label for="text">Aditional infromation:</label></p>
                        <textarea id="text" name="w3review" rows="4" cols="50"></textarea>
                    </div>
                    <div className="col-12 bttns">
                        <p className="border pymnt mb-3 mt-3 p-0">Payment done: Yes</p>
                        <p><button type="button" className="mdcl btn btn-light btn-outline-dark">SEE MEDICAL RECORDS</button></p>
                    </div>
                </div>


            </div>
        </div>

    )

}

export default Appospecific;

