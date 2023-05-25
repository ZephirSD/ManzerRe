import React, { useEffect, useState } from 'react'
import Header from '../composants/Header'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import CardRepasClient from '../composants/CardRepasClient'

function RepasClient(){
    const [repasGetClient, setrepasGetClient] = useState([])
    let paramId = useParams();
    const fetchRepasClient = () => {
        axios.get(`${process.env.REACT_APP_URL_FETCH}/api/repas/${paramId.idClient}`)
        .then(response => {
            setrepasGetClient(response.data.result);
        }).catch(err => console.error);
    }
    useEffect(() => {
        fetchRepasClient()
    })
    
  return (
    <>
        <Header/>
        <Link to={"/creer"}>
            <button style={{margin: '2vh 15px 2vh 0px'}} type="button" id='btnCreerRepas' class="text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 absolute right-0 mr-3 dark:focus:ring-blue-800">Créer repas</button>
        </Link>
        <h1 id="titreRepasClient">Vos Repas</h1>
        <div id='gridCardRepasAccueil' class="container m-auto">
        {
            repasGetClient
            .map((repas, index) => (
                <CardRepasClient key={index} repas={repas}/>
            ))
        }
        </div>

    </>
  )
}

export default RepasClient
