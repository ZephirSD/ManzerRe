/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import repas from '../assets/carry_bichique.jpg'

function CardRepasAccueil() {
  return (
    <>
        <div class="max-w-sm rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" id="cardRepasA">
            <a href="#">
                <img class="rounded-t-lg" src={repas} alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Carry Bichique</h5>
                </a>
                <p class="mb-3 font-normal text-white dark:text-gray-400">#poisson</p>
                <div class="flex items-center space-x-4">
                    <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg class="absolute w-12 h-12 text-gray-300 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div class="font-medium dark:text-white">
                        <div class="text-gray-300">Test</div>
                    </div>
                    </div>
            </div>
        </div>
    </>
  )
}

export default CardRepasAccueil
