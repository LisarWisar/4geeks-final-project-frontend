import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Pet from "../components/Pet";

export const Petsview = () => {
  return (
    <div>
      <div className="row inline mt-5" >
        <div className="col-8 text-center border" id="yrpts">
        <h3>Your Pets</h3>
        </div>
        <div className="col-4">
        <p><button id="nwpt">Add New Pet</button></p>
        </div>
      </div>
      
      <Pet />
      <Pet />
      <Pet />
    

    </div>
  );
}

