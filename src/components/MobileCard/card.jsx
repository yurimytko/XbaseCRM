import React, { useCallback, useState, useRef } from 'react';
import './dist/card.css';
import { useNavigate } from 'react-router-dom';


export default function Card({ fd, setPrice, currency, setCurrency }) {
    const nav = useNavigate()
    const [ChangeOpen, setChangeOpen] = useState(false)
    const [rotation, setRotation] = useState(0);
    const [translate, setTraslate] = useState(0)
    const cardRef = useRef(null);

    const euro = useRef()
    const dol = useRef()
    const grivnya = useRef()

    const arrow_btn = useRef()
    const valute_close = useRef()

    let currentX = 0;

    const handleTouchStart = (event) => {
        currentX = event.touches[0].clientX;
    };

    const handleTouchMove = (event) => {
        currentX = event.touches[0].clientX;
        const sensetive = 30;
        const translateSensetive = 1.6

        let rotationValue = (currentX / cardRef.current.offsetWidth);

        if (rotationValue > 1.2) {
            rotationValue = rotationValue * sensetive
        } else if (rotationValue < 0) {
            rotationValue = rotationValue * sensetive - 16.5
        }

        const stopValue = 20

        if (rotationValue > stopValue) {
            rotationValue = stopValue
        } else if (rotationValue < -stopValue) {
            rotationValue = -stopValue
        }

        let translateValue = rotationValue * translateSensetive
        setRotation(rotationValue);
        setTraslate(translateValue)
    };

    const handleTouchEnd = () => {
        console.log(rotation)
        setRotation(0);
        setTraslate(0)

    };

    const openView = useCallback(
        () => {
            nav(`/selections/${fd.id}`)
        }
        , [nav, fd])


    const change_value = useCallback(() => {
        if (ChangeOpen === false) {
            grivnya.current.style.left = '3vh'
            dol.current.style.left = '7vh'
            euro.current.style.left = '11vh'
            grivnya.current.style.opacity = '1'
            dol.current.style.opacity = '1'
            euro.current.style.opacity = '1'
            arrow_btn.current.style.transform = 'rotate(90deg)'
            arrow_btn.current.style.opacity = '0'
            valute_close.current.style.transform = 'rotate(90deg)'
            valute_close.current.style.opacity = '1'
            setChangeOpen(true)
        }
        else {
            arrow_btn.current.style.transform = 'rotate(0deg)'
            arrow_btn.current.style.opacity = '1'
            valute_close.current.style.transform = 'rotate(0deg)'
            valute_close.current.style.opacity = '0'
            grivnya.current.style.left = '0vh'
            dol.current.style.left = '0vh'
            euro.current.style.left = '0vh'
            grivnya.current.style.opacity = '0'
            dol.current.style.opacity = '0'
            euro.current.style.opacity = '0'
            setChangeOpen(false)
        }

    }, [ChangeOpen, setChangeOpen])


    const dollar = () => {
        change_value()
        let dollar = 22000 / 37
        setPrice(dollar.toFixed(1))
        setCurrency("$")
    }
    const uah = () => {
        change_value()
        let uah = 22000
        setPrice(uah)
        setCurrency("₴")
    }
    const eu = () => {
        change_value()
        let eu = 22000 / 40.26
        setPrice(eu.toFixed(1))
        setCurrency("€")
    }


    return (
        <div id='card' ref={cardRef} style={{ transform: `rotate(${rotation}deg) translateX(${translate}vh)`  }} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} className="Card">
            <div className='price_block'>
                <span>{fd.price} {currency}</span>
                <div className='open_valute_block' onClick={change_value}>
                    <div className='break_price'></div>
                    <div className='valute_open' >
                        <img ref={arrow_btn} id='arrow_btn' src="./img/Vector (10).svg" alt="" />
                        <div ref={valute_close} id='valute_close' className='valute_close'>
                            <div id='arrow1' className='arrow_close'></div>
                            <div id='arrow2' className='arrow_close'></div>
                        </div>

                        <div onClick={() => { eu() }} ref={euro} id='euro' className='change_valute'> <span>€</span> </div>
                        <div onClick={dollar} ref={dol} id='dollar' className='change_valute'><span>$</span></div>
                        <div onClick={uah} ref={grivnya} id='grivnya' className='change_valute'> <span>₴</span> </div>


                    </div>

                </div>


            </div>
            <div onClick={openView} className='first_card_filter'></div>
            <div onClick={openView} className='arrow_con_filter'>
                <div className='arrow_con'>
                    <img id='left_arrow' src="./img/chevron-left (1).svg" alt="" />
                    <img id='right_arrow' src="./img/chevron-right.svg" alt="" />
                </div>
            </div>
            <img className="img1" src="./img/Img.png" alt="bruh" />
            <div className='card_bottom_info'>
                <div onClick={openView} className='card_info_block'>
                    <div className='card_info'>
                        <img className='card_info_img' src="./img/location-2.svg" alt="" />
                        {fd.location}
                    </div>
                    <div className='break'></div>
                    <div className='card_info'>
                        <img className='card_info_img' src="./img/door-closed.svg" alt="" />
                        {fd.room_count}к
                    </div>
                    <div className='break'></div>
                    <div className='card_info'>
                        <img className='card_info_img' src="./img/expand.svg" alt="" />
                        {fd.size} м²
                    </div>
                </div>
                <div onClick={openView} className='card_title'>
                    {fd.title}
                </div>
            </div>

        </div>
    )
}
