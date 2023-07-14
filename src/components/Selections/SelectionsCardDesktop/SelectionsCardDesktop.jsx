import React from 'react';

import './dist/SelectionsCardDesktop.css';




export default function SelectionCardDesktop({cardPrice}) {



    return (
        <div className='Desk_card_con'>
            <div className='Desk_card'>
                <div className='sel_card_img_con'>
                    <img className='sel_card_img' src={process.env.PUBLIC_URL + './img/card_img.png'} alt="" />
                    <div className="square">
                        <div id="square_text">
                            70 м²
                        </div>
                    </div>
                    <div className="card_price">
                        <div id='card_price_text'>{cardPrice}</div>
                    </div>

                </div>
                <div className='sel_card_title'>
                    Оренда 1 кім квартири п. орлика Дрогобич
                </div>
                <div className='sel_card_location'>
                    <img src={process.env.PUBLIC_URL + './img/LocationIcon.svg'} alt="" />
                    <div className="sel_card_location_text">Львів, ул. Харьківськa, 12</div>
                </div>
                <div className='sel_card_info'>
                    <div className='sel_card_info_subcon'>
                        <img src={process.env.PUBLIC_URL + '/img/door-closed.svg'} alt="" />
                        <div className="sel_card_info_text">2к</div>
                    </div>
                    <div className="sel_card_info_break" />
                    <div className='sel_card_info_subcon'>
                        <img src={process.env.PUBLIC_URL + '/img/stairs.svg'} alt="" />
                        <div className="sel_card_info_text">8 із 18</div>
                    </div>
                </div>
                <div className='sel_card_about'>
                    Оренда 1- кімнатної квартири кухня студія по вул. Шота Руставеллі. В квартирі є вся необхідна техніка та меблі, гарна, затишна.
                </div>

                <button className='send_to_rieltor'>Надіслати рієлтору в чат</button>
            </div>
            <div className='desk_fav'>
                <div id='deck_dislike' className='deck_like'>
                    <img src={process.env.PUBLIC_URL + './img/dislike.svg'} alt="" />
                </div>
                <div id='deck_like' className='deck_like'>
                    <img src={process.env.PUBLIC_URL + './img/like.svg'} alt="" />

                </div>

            </div>
        </div>
    )
}