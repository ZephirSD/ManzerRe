/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

function Header() {
    // let getUsers = JSON.parse(localStorage.getItem('getUsers') || '[]');
    const [userState, setuserState] = useState("");
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);
    const login = useGoogleLogin({
      onSuccess: (codeResponse) => {setUser(codeResponse)},
      onError: (error) => console.log('Login Failed:', error)
  });
    // const responseMessage = (response) => {
    //     console.log(response);
    // };
    // const errorMessage = (error) => {
    //     console.log(error);
    // };
    const logOut = () => {
        localStorage.clear();
        googleLogout();
        setProfile(null);
        setUser(null);
      };    
    const createUserMongo = async (profil) => {
        await axios.get(`http://localhost:5000/api/user/${profil.id}`)
        .then((res) => {
            // console.log(res.data);
            if(res.data.result == null){
                const donnes = axios.post(`http://localhost:5000/api/user`, {
                    email: profil.email,
                    pseudo: profil.name,
                    image: profil.picture,
                    id_user: profil.id
                })
                donnes.then((res) => {
                    setuserState(res.data);
                });
            }
            else{
                setuserState(res.data);
                
            }
        })
    }
    useEffect(() => {
        if (user) {
            axios
              .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                  headers: {
                      Authorization: `Bearer ${user.access_token}`,
                      Accept: 'application/json'
                  }
              })
              .then((res) => {
                // console.log(res.data);
                setProfile(res.data);
                createUserMongo(res.data);
              })
              .catch((err) => console.log(err));
          }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[user]);
    useEffect(() => {
        async function setUserArray() {
          if(userState && JSON.stringify(userState).length > 2){
            await localStorage.setItem("getUsers", JSON.stringify(userState));
          }
        }
        // let arrayUser = JSON.parse(localStorage.getItem("getUsers"));
        // console.log(arrayUser.result.id_user);
        setUserArray();
      });
  return (
    <>
        <nav class="bg-headerColor dark:bg-headerColor w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600" id='navHeader'>
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to={"/"} class="flex items-center">
                    <img src={logo} alt="Flowbite Logo" />
                </Link>
                <div class="flex md:order-2">
                    {
                        profile ? (
                            <>
                                <div class="dropdown inline-block relative">
                                    <button class="inline-flex items-center">
                                        <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                            <img src={profile.picture} alt="ProfilePicture" />
                                            {/* <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg> */}
                                        </div>
                                    </button>
                                    <ul class="dropdown-menu absolute hidden text-gray-700 pt-1" style={{zIndex: "10px"}}>
                                        <li class="">
                                            <Link to={"/creer"}>
                                                <span class="rounded-t bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Créer repas</span>
                                            </Link>
                                        </li>
                                        <li class="">
                                            <Link to={`/repas-client/${JSON.parse(localStorage.getItem("getUsers")).result.id_user}`}>
                                                <span class="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Listes de vos repas</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* <span class="ml-2 text-sm font-semibold">{profile.name}</span>  */}
                                <button onClick={logOut} id='btnConnexion' type="button" class="text-white bg-[#E26F6F] hover:bg-[#E26F6F]/90 focus:ring-4 focus:outline-none focus:ring-[#E26F6F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#E26F6F]/55 mr-2 mb-2">Deconnecter</button>                           
                            </>
                        ) : 
                        (
                            <>
                                <button onClick={() => login()} id='btnConnexion' type="button" class="text-white bg-[#E26F6F] hover:bg-[#E26F6F]/90 focus:ring-4 focus:outline-none focus:ring-[#E26F6F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#E26F6F]/55 mr-2 mb-2">
                                    <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                                    Connecter avec Google
                                </button>
                            </>
                        )
                    }
                    {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} /> */}
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header
