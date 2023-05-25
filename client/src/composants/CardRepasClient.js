/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import repasImage from '../assets/carry_bichique.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'

function CardRepasClient({repas}) {
    const deleteRepas = () => {
        axios.delete(`${process.env.REACT_APP_URL_FETCH}/api/repas/${repas._id}`)
        .then(response => response.json())
        .catch(err => console.error(err));
    }
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
                        <svg class="absolute w-12 h-12 text-gray-300 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div class="font-medium dark:text-white">
                        <div class="text-gray-300">Test</div>
                    </div>
                </div>
                <div class="flex justify-between w-full py-4">
                    <Link to={`/modifier?${repas._id}`}>
                        <button type="button" class="text-white bg-yellow-400 mx-4 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-yellow-400 dark:hover:bg-yellow-700 dark:focus:bg-yellow-800">
                            Modifier
                        </button>                    
                    </Link>
                    <button onClick={deleteRepas} type="button" id='btnSupprimer' class="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                        Supprimer
                    </button>                    
                </div>
            </div>
        </div>
    </>
  )
}

export default CardRepasClient
