import React, { useEffect, useState } from 'react';
import  './style/style.scss';
import Accueil from './pages/Accueil';
import './style/index.css';
import axios from "axios";

function App() {
  const [repasGet, setrepasGet] = useState([])
  const fetchRepas = async () => {
    await axios.get('http://localhost:5000/api/repas')
    .then(response => {
        setrepasGet(response.data.result);
    }).catch(err => console.error);
  }
  useEffect(() => {
      fetchRepas()
    }, [])
  return (
    <>
      <Accueil listeRepas={repasGet}/>
    </>
  )
}

export default App