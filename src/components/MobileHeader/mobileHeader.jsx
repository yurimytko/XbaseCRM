
import React, {useCallback} from "react"
import { useNavigate } from 'react-router-dom';

import './dist/mobileHeader.css'


export function MobileHeader({fakedata, price, currency, img, setImg, setLike}){



    const nav = useNavigate()

    const openView = useCallback(
        () => {
            nav('/selections')
        }
    ,[nav])

    const newNavChange = () =>{
        document.getElementById('active_button').style.transform = "translateX(98%)"
        document.getElementById("history").style.opacity = "0.5"
        document.getElementById("new").style.opacity = "1"
        document.getElementById('swiper').style.opacity = "1"
        document.getElementById('swiper').style.transform = "translateX(-100%)"
        document.getElementById('history_block').style.transform = "translateX(-100%)"
        document.getElementById('history_block').style.opacity = "0"
        document.getElementById("message").style.opacity = "0"
        document.getElementById("big_btn").innerText = "Надіслати ріелтору в чат";
        document.getElementById("big_btn").style.color = "#FFF";
        document.getElementById("big_btn").style.background = "rgba(93, 99, 255, 0.70)";
        document.getElementById("big_btn").style.border = "1px solid rgba(93, 99, 255, 0.70)";
        document.getElementById("message_img").style.background = "rgba(93, 99, 255, 0.70)";
        document.getElementById("message_img").style.border = "1px solid rgba(93, 99, 255, 0.70)";
        setImg('./img/message.svg')
        setLike(false)

    }
    const historyNavChange = () =>{
        document.getElementById('active_button').style.transform = "translateX(2%)"
        document.getElementById("history").style.opacity = "1"
        document.getElementById("new").style.opacity = "0.5"
        document.getElementById('swiper').style.opacity = "0"
        document.getElementById('swiper').style.transform = "translateX(100%)"
        document.getElementById('history_block').style.transform = "translateX(0%)"
        document.getElementById('history_block').style.opacity = "1"
        document.getElementById("message").style.opacity = "1"
        document.getElementById("big_btn").style.background = "rgba(255, 255, 255, 0.28)";
        document.getElementById("big_btn").style.border = "1px solid #FFF";
        document.getElementById("big_btn").innerText = "Показати тільки ті, що сподобалися";
        document.getElementById("message_img").style.background = "rgba(255, 255, 255, 0.28)";
        document.getElementById("message_img").style.border = "1px solid #FFF";
        setImg('./img/filters.svg')
    }






    return(
        <div id='mobile_header' className='mobile_header'>
            <div id="realtor_contact" className="realtor_contact">
                <div className="realtor_info_block">
                    <img src={process.env.PUBLIC_URL +"/img/avatar.png"} alt="" />
                    <div className="realtor_name">
                        <span className="name">Мицавка Юрій</span>
                        <span className='job_title'>Рієлтор</span>
                    </div>
                </div>
                <div className="contacts">
                    <img id='message' src="./img/message.svg" alt="" />
                    <img id="call" src="./img/call.svg" alt="" />

                </div>
            </div>
            <div id="nav_buttons_con" className="nav_buttons_con">
                <p id='history' onClick={historyNavChange} className='history'>Історія</p>
                <p id='new' onClick={newNavChange} className='new'>Нові</p>
                <div id='active_button' className="active_button"></div>
            </div>
            <div id="mobile_product" className="mobile_product">
                <img onClick={openView} src="./img/chevron-left.svg" alt="" />
                <p className="object_price">{price} {currency}</p>
                <img src="./img/avatar.png" alt="" />
            </div>
        </div>
    )
}
