
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

        getUserPetList: () => {
          const initlUrl = "http://localhost:5007/user/pets"
          const token = localStorage.getItem('jwt-token')
          fetch(initlUrl,       
          {method: "GET", 
          headers: { 
              "Content-Type": "application/json",
              'Authorization': 'Bearer ' + token //authorization token
          }})

        .then(response => response.json())
        .then(data => {setStore({petList:data})
          console.log(data)
      })
        .catch(error => console.log(error))
          
      }
      }
    }
  }
  
  export default getState;