
const getState = ({ getStore, getActions, setStore }) => {
    return {
      store: {
        patient: {},
        petList: {}
      },
      actions: {
        getPatient: (id) => {
            const initialUrl = "http://localhost:5007/vet/clinical-records-specific/" + id;
                fetch(initialUrl)
          .then(response => response.json())
          .then(data => setStore({patient:data}))
          .catch(error => console.log(error))
            
        },
        getUserPetList: (id) => {
          const initlUrl = "http://localhost:5007/user/pet/" + id;
              fetch(initlUrl)
        .then(response => response.json())
        .then(data => setStore({petList:data}))
        .catch(error => console.log(error))
          
      }
      }
    }
  }
  
  export default getState;