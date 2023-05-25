import React, { useState } from 'react'
import Header from '../composants/Header'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Tagify from '@yaireo/tagify'
// import Tags from '@yaireo/tagify/dist/react.tagify'
// import '@yaireo/dragsort/dist/dragsort.css'

function Formulaire() {
    const [nomRepas, setNomRepas] = useState("");
    const [tags, setTags] = useState([]);
    const [secteur, setSecteur] = useState("");
    var tagify = new Tagify(document.getElementById('tags'), {
      originalInputValueFormat: valuesArr => valuesArr.map(item => item.value).join(',')
    })
    tagify.on('keydown', onTagifyKeyDown)
    function onTagifyKeyDown(e){
      if( e.key === 'Enter' &&       
          !tagify.state.inputText && 
          !tagify.state.editing      
        ){
        setTimeout(() => document.getElementById('tags').submit()) 
        tagify.addTags();
      }
    }
    // const navigate = useNavigate();
    // const [dataForm, setdataForm] = useState({
    //     nom_repas: "",
    //     tags: [],
    //     secteur: "est"
    // });
    let paramCrud = useParams();
    console.log(paramCrud);
    const updateCreate = (e) => {
        e.preventDefault();
        let data = JSON.stringify({
            "nom_repas": nomRepas,
            "tags": [
              ...tags
            ],
            "id_createur": "2",
            "secteur": secteur
          });
        if(paramCrud.crudRepas){
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
    }

  return (
    <>
      <Header/>
      <section className='flexForm'>
        <div class="p-4 max-w-4xl min-h-full bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-70" id='caseForm'>
            <div class="space-y-6">
                <div>
                    <label for="nom_repas" class="block mb-2 text-sm font-medium text-white dark:text-white">Nom du repas</label>
                    <input onChange={e => setNomRepas(e.target.value)} type="text" name="nom_repas" id="nom_repas" class="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 text-white" required/>
                </div>
                <div>
                    <label for="tags" class="block mb-2 text-sm font-medium text-white dark:text-white">Tags</label>
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
                    <input class="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 text-white" id="image_repas" type="file"></input>
                </div>
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
