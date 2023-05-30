/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import repasImage from '../assets/carry_bichique.jpg'
import axios from 'axios'

function CardRepasAccueil({repas}) {
    const [userRepas, setuserRepas] = useState([]);
    useEffect(() => {
        const fetchRepas = async () => {
            await axios.get(`${process.env.REACT_APP_URL_FETCH}/api/user/${repas.id_createur}`)
            .then(response => {
                setuserRepas(response.data.result);
            }).catch(err => console.error);
          }
        fetchRepas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <>
        <div class="max-w-sm rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" id="cardRepasA">
            <a href="#">
                <img class="rounded-t-lg" src={repasImage} alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{repas.nom_repas}</h5>
                </a>
                <p class="mb-3 font-normal text-white dark:text-gray-400">
                    <div style={{display: 'flex'}}>
                        {
                            repas.tags.map((tag,index)=> (
                                <div key={index} style={{padding: '0px 5px'}}>{tag}</div>
                            ))
                        }
                    </div>
                </p>
                <div class="flex items-center space-x-4">
                    <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <img src={userRepas.image} alt="ProfilePicture" />
                    </div>
                    <div class="font-medium dark:text-white">
                        <div class="text-gray-300">
                            {
                                userRepas.pseudo
                            }
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    </>
  )
}

export default CardRepasAccueil
