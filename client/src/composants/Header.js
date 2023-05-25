/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <nav class="bg-headerColor dark:bg-headerColor w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600" id='navHeader'>
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to={"/"} class="flex items-center">
                    <img src={logo} alt="Flowbite Logo" />
                </Link>
                <div class="flex md:order-2">
                    <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header
