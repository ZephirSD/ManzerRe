import React, { useState } from 'react'
import Header from '../composants/Header'
import CardRepasAccueil from '../composants/CardRepasAccueil'

function Accueil({listeRepas}) {
    const [searchRepas, setsearchRepas] = useState("");
    const [changeSecteurNord, setchangeSecteurNord] = useState(false);
    const [changeSecteurEst, setchangeSecteurEst] = useState(false);
    const [changeSecteurSud, setchangeSecteurSud] = useState(false);
    const [changeSecteurOuest, setchangeSecteurOuest] = useState(false);
  return (
    <>
      <Header/>
      <div class="flex justify-center py-4 w-full">
        <label for="simple-search" class="sr-only italic">Rechercher</label>
        <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input onChange={(e) => setsearchRepas(e.target.value)} type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rechercher" required/>
        </div>
      </div>      
    <ul class="items-center flex justify-center w-full text-sm font-medium text-gray-900 rounded-lg sm:flex dark:bg-gray-700 dark:text-white">
        <li class="w-80 dark:border-gray-600">
            <div class="flex items-center pl-3">
                <input onChange={e => setchangeSecteurNord(e.target.checked)} id="vue-checkbox-list" type="checkbox" value="nord" class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                <label for="vue-checkbox-list" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nord</label>
            </div>
        </li>
        <li class="w-80 dark:border-gray-600">
            <div class="flex items-center pl-3">
                <input onChange={e => setchangeSecteurEst(e.target.checked)} id="react-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600  rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                <label for="react-checkbox-list" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Est</label>
            </div>
        </li>
        <li class="w-80  dark:border-gray-600">
            <div class="flex items-center pl-3">
                <input onChange={e => setchangeSecteurSud(e.target.checked)} id="angular-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                <label for="angular-checkbox-list" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sud</label>
            </div>
        </li>
        <li class="w-80 dark:border-gray-600">
            <div class="flex items-center pl-3">
                <input onChange={e => setchangeSecteurOuest(e.target.checked)} id="laravel-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                <label for="laravel-checkbox-list" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ouest</label>
            </div>
        </li>
    </ul>
    <div id='gridCardRepasAccueil' class="container m-auto">
        {
            listeRepas
            .filter((item) => item.nom_repas.toLowerCase().includes(searchRepas.toLowerCase()))
            .filter((itemSecteur) => 
                changeSecteurNord ? itemSecteur.secteur.toLowerCase().includes("nord")
                : changeSecteurEst ? itemSecteur.secteur.toLowerCase().includes("est")
                : changeSecteurSud? itemSecteur.secteur.toLowerCase().includes("sud")
                : changeSecteurOuest? itemSecteur.secteur.toLowerCase().includes("ouest")
                : itemSecteur.secteur.toLowerCase().includes(""))
            .map((repas, index) => (
                <CardRepasAccueil key={index} repas={repas}/>
            ))
        }
    </div>

    </>
  )
}

export default Accueil
