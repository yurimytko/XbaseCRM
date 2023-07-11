import React from 'react'

import "./dist/hisCard.css"


export function HistoryCard(){
    return(
        <div className="his_card">
            <div className="img_con">
                <img className='room_img' src="./img/room_img.png" alt="" />
            </div>
            <p className='room_his_info'>Львів, ул. Харьківськa, 12 22 000₴ • 2к</p>

        </div>
    )
}