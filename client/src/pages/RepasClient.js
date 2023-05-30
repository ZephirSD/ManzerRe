import React, { useEffect, useState } from 'react'
import Header from '../composants/Header'
import { useParams } from 'react-router-dom'
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
        fetchRepasClient();
    })
    
  return (
    <>
        <Header/>
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
