import React, {useEffect, useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import ClientPage from '../../pages/ClientPage/client'
import Dashboard from '../../pages/DashBoard/dashboard'
import Request from '../../pages/RequestPage/request'
import MainHeader from '../MainHeader/mainHeader'

import './dist/main.css'


export default function Main(){





    useEffect(()=>{
        if(window.location.pathname === '/autorization'){
            document.getElementById("crm").style.display = 'none'
        }

        else if(window.location.pathname === '/selections'){
            document.getElementById("crm").style.display = 'none'
        }
        else{
            document.getElementById("crm").style.display = 'flex'
        }
    },[])
    return(
        <div id='main' className='main'>
            <MainHeader/>
            <div className="main_container">
                <Routes>
                    <Route index element={<Dashboard/>}/>
                    <Route path='clients' element={<ClientPage/>}/>
                    <Route path='requests' element={<Request/>}/>
                </Routes>
            </div>

            
        </div>
    )
}