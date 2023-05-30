import React, { useEffect, useState } from 'react'
import Header from '../composants/Header'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Formulaire() {
    let paramCrud = useParams();
    // console.log(paramCrud);
    let arrayUser = JSON.parse(localStorage.getItem("getUsers"));
    const [repasCli, setrepasCli] = useState([]);
    const [nomRepas, setNomRepas] = useState("");
    const [tags, setTags] = useState("");
    const [secteur, setSecteur] = useState("");
    const [image, setimage] = useState([]);
    // const [repasUpdate, setrepasUpdate] = useState({
    //   nomRep: "",
    //   tags: "",
    //   secteur: "",
    //   nom_image: ""
    // })
    const fetchRepasClient = () => {
      axios.get(`${process.env.REACT_APP_URL_FETCH}/api/repas/one/${paramCrud.id_repas}`)
      .then(response => {
          setrepasCli(response.data.result);
      }).catch(err => console.error);
    }
    if(paramCrud.crudRepas === "modifier"){

    }
  useEffect(() => {
    fetchRepasClient();
    console.log(repasCli);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
    const updateCreate = (e) => {
        e.preventDefault();
        console.log(image.name);
        let data = JSON.stringify({
            "nom_repas": nomRepas,
            "tags": tags.replace(/\s/g, '').split(','),
            "id_createur": arrayUser != null ? arrayUser.result.id_user : null,
            "secteur": secteur,
            "nom_image": image.name,
          });
        if(paramCrud.crudRepas === "creer"){
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${process.env.REACT_APP_URL_FETCH}/api/repas`,
                headers: { 
                  'Content-Type': 'application/json'
                },
                data : data
              };
              axios.request(config)
              .then((response) => {
                
              }).catch((error) => {
                console.log(error);
              });
        }
        else{
          let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `http://localhost:5000/api/repas/${paramCrud.id_repas}`,
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
        }
        window.location.replace(`/`);
    }

  return (
    <>
      <Header/>
      <section className='flexForm'>
        <div class="p-4 max-w-4xl min-h-full bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-70" id='caseForm'>
            <div class="space-y-6">
              {
                paramCrud.crudRepas === "creer" ? (
                  <>
                      <div>
                          <label for="nom_repas" class="block mb-2 text-sm font-medium text-white dark:text-white">Nom du repas</label>
                          <input onChange={e => setNomRepas(e.target.value)} type="text" name="nom_repas" id="nom_repas" class="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 text-white" required/>
                      </div>
                      <div>
                          <label for="tags" class="block mb-2 text-sm font-medium text-white dark:text-white">Tags: <i>séparé les mots avec une virgule</i></label>
                          <input onChange={e => setTags(e.target.value)} type="text" name="nom_repas" id="nom_repas" class="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 text-white" required/>
                      </div>
                      <div>
                        <label for="secteur" class="block mb-2 text-sm font-medium text-white dark:text-white">Selectionne le secteur</label>
                        <select onChange={e => setSecteur(e.target.value)} id="secteur" class="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 text-white">
                          <option selected>Choisir le secteur</option>
                          <option value="nord">Nord</option>
                          <option value="est">Est</option>
                          <option value="ouest">Ouest</option>
                          <option value="sud">Sud</option>
                        </select>
                      </div>
                      <div>
                          <label class="block mb-2 text-sm font-medium text-white dark:text-white" for="image_repas">Image</label>
                          <input accept='image/*' onChange={(e) => setimage(e.target.files[0])} class="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 text-white" id="image_repas" type="file"></input>
                      </div>                  
                  </>
                ) : (
                  <>
                  {
                    repasCli.map((repas) => (
                        <>
                          <div>
                            <label for="nom_repas" class="block mb-2 text-sm font-medium text-white dark:text-white">Nom du repas</label>
                            <input onChange={e => setNomRepas(e.target.value)} type="text" name="nom_repas" id="nom_repas" class="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 text-white" required/>
                          </div>
                          <div>
                              <label for="tags" class="block mb-2 text-sm font-medium text-white dark:text-white">Tags: <i>séparé les mots avec une virgule</i></label>
                              <input onChange={e => setTags(e.target.value)} type="text" name="nom_repas" id="nom_repas" class="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 text-white" required/>
                          </div>
                          <div>
                            <label for="secteur" class="block mb-2 text-sm font-medium text-white dark:text-white">Selectionne le secteur</label>
                            <select onChange={e => setSecteur(e.target.value)} id="secteur" class="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 text-white">
                              <option>Choisir le secteur</option>
                              <option value="nord">Nord</option>
                              <option value="est">Est</option>
                              <option value="ouest">Ouest</option>
                              <option value="sud">Sud</option>
                            </select>
                          </div>
                          <div>
                              <label class="block mb-2 text-sm font-medium text-white dark:text-white" for="image_repas">Image</label>
                              <input accept='image/*' onChange={(e) => setimage(e.target.files[0])} class="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 text-white" id="image_repas" type="file"></input>
                          </div>                  
                        </>
                    ))
                  }
                  </>
                )
              }
                <button type='button' onClick={updateCreate} class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" id='btnForm'>
                    {
                        paramCrud.crudRepas === "creer" ? 'Créer' : 'Modifier'
                    }
                </button>
            </div>
        </div>
      </section>
    </>
  )
}

export default Formulaire
