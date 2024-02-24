import React, { useEffect, useState, useContext } from 'react'
import { Context } from "../store/context"
import { useParams, useNavigate } from 'react-router-dom';
import "../../styles/UserPetListed.css";


export const UserPetListed = () => {
  const navigate = useNavigate()
  const  { store, actions }= useContext(Context)

/*    const [userpetListed, setuserpetListed] = useState([]); */
   let {id} = useParams() 
   console.log("mensaje",id)


    useEffect(()=> {
      actions.getUserPetList(id)

    }, [])
 console.log("store user pet listed",store.petList)

  return (

    <>
    <div className='userPetListTitle'>
      <p>Your Pets</p>
    </div>
    <div className='card-box'>
    <div className="col-8 userPetList my-4 py-5">
    <div className="row">
        <div className="col-3">
            <div className="ratio ratio-1x1">
                <img src={store.petList.image}></img>
            </div>
        </div>
        <div className="col-9">
            <div id="data-pet-list"className="row">
                <div className="col-8">Name:{store.petList.name}</div>
                <div className="col-8">Species:{store.petList.species}</div>
                <div className="col-6">Age:Hola{store.petList.age}</div>
                <button className="mx-5" onClick={() => {navigate(`/vet/clinical-records/${store.pet_id}`)}}>See more...</button>

            </div>
      </div>
</div>
    </div>
</div>

</>
  )
}
export default UserPetListed;  