import React, {useEffect, useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import ClientPage from '../../pages/ClientPage/client'
import MainHeader from '../MainHeader/mainHeader'

import './dist/main.css'


export default function Main(){





    useEffect(()=>{
        if(window.location.pathname === '/autorization'){
            document.getElementById("main").style.display = 'none'
        }else{
            document.getElementById("main").style.display = 'flex'
        }
    },[])
    return(
        <div id='main' className='main'>
            <MainHeader/>
            <div className="main_container">
                <Routes>
                    <Route path='clients' element={<ClientPage/>}/>
                </Routes>
            </div>

            
        </div>
    )
}