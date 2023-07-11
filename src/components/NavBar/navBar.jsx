import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import "./dist/navBar.css"


export default function NavBar(){


    

    useEffect(()=>{
        if(window.location.pathname === '/autorization'){
            document.getElementById("nav").style.display = 'none'
        }else{
            document.getElementById("nav").style.display = 'flex'
        }
    },[])
    return(
        <div id='nav' className='nav_bar'>
            <img className='nav_logo' src="./img/logo.png" alt="" />
            <nav className="navigation_menu">
                <NavLink to = '/' className="menu_item_g">
                    <div className="grid_link"></div>
                </NavLink>
                <NavLink  to='/clients' className="menu_item_u">
                    <div className="user_link"></div>
                </NavLink>
                <div className="menu_item_m">
                    <div className="megaphone_link"></div>
                </div>
                <div className="menu_item_h">
                    <div className="home_link"></div>
                </div>
                <div className="menu_item_x">
                    <div className="xbase_link"></div>
                </div>
                <div className="menu_item_c">
                    <div className="calendar_link"></div>
                </div>
                <div className="menu_item_co">
                    <div className="copy_link"></div>
                </div>
            </nav>
            <div className="office">
                <div className="office_link"></div>
            </div>
        </div>
    )
}