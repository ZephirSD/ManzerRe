import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  './style/style.scss';
import Accueil from './pages/Accueil';
import './style/index.css';
import axios from "axios";
import Formulaire from './pages/Formulaire';
import RepasClient from './pages/RepasClient';

function App() {
  const [repasGet, setrepasGet] = useState([]);
  const fetchRepas = async () => {
    await axios.get(`${process.env.REACT_APP_URL_FETCH}/api/repas`)
    .then(response => {
        setrepasGet(response.data.result);
    }).catch(err => console.error);
  }
  useEffect(() => {
      fetchRepas()
    }, [])
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Accueil listeRepas={repasGet}/>}/>
            <Route path="/:crudRepas" element={<Formulaire/>} />
            <Route path="/:crudRepas/:id_repas" element={<Formulaire/>} />
            <Route path='/repas-client/:idClient' element={<RepasClient/>}/>
          </Routes>    
      </BrowserRouter>
    </>
  )
}

export default App