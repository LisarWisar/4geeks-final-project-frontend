import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import dogo1 from "../img/dogo1.jpeg";



const Pet = () => {
    return (
        <div className="container">
            <div className="row border dogos text-left py-4 mt-4 mb-4" id="dogos">
                <div className="col-4 ps-3 mt-3">
                    <img src={dogo1} alt="dogo1" id="dogo" />
                </div>
                <div className="col-8">
                    <div className="mt-4" id="infodogo">
                        <p className="fw-semibold container-fluid text-left pe-1" style={{ display: 'inline' }}>Name:</p>
                        <p className="fw-light container-fluid text-rigth ps-0" style={{ display: 'inline' }} id="nm">Thomas</p><br></br>
                        <p className="fw-semibold container-fluid text-left pe-1" style={{ display: 'inline' }}>Species:</p>
                        <p className="fw-light container-fluid text-rigth ps-0" style={{ display: 'inline' }} id="spcs">Canine</p><br></br>
                        <p className="fw-semibold container-fluid text-left pe-1" style={{ display: 'inline' }}>Age:</p>
                        <p className="fw-light container-fluid text-rigth ps-0" style={{ display: 'inline' }} id="g">3 years, 1 month.</p><br></br>
                    </div>
                    <div className="">
                        <p className="" style={{ display: 'inline' }}><button className="petbutton" id="prscrptns">Prescriptions</button></p>
                        <p className="" style={{ display: 'inline' }}><button className="petbutton" id="clncl">Clinical Records</button></p>
                        <p className="" style={{ display: 'inline' }}><button className="petbutton" id="pntmnts">Apointments</button></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pet;