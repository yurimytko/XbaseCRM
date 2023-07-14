import React, { useCallback, useState } from "react"
import { useNavigate } from 'react-router-dom';

import './dist/selectionsHeader.css'

export default function SelectionsHeader({sCardPrice}) {
    const nav = useNavigate()
    const [currentSwiper, setCurrentSwiper] = useState(1)
    const [currentCurrency,setCurrentCurrency] = useState(1)
    const [valute,setValute] = useState('₴ UAH')

    const openView = useCallback(
        () => {
            nav('/selections')
        }
        , [nav])


    const currencySelectorOpen = () => {
        let currBlock = document.getElementById("currBlock")
        let secondCurrBlock = document.getElementById("s_curr_block")
        let USD = document.getElementById("USD")
        let EUR = document.getElementById("EUR")
        


        if(currentCurrency === 1) {
            secondCurrBlock.style.height = "9vh"
            secondCurrBlock.style.opacity = '100'
            setCurrentCurrency(0)
        }
        else {
            secondCurrBlock.style.height = "0vh"
            secondCurrBlock.style.opacity = '0'
            setCurrentCurrency(1)
        }
    }

    const UAHSelect = ({setCardPrice}) => {
        let secondCurrBlock = document.getElementById("s_curr_block")

        setValute('₴ UAH')
        secondCurrBlock.style.height = "0vh"
        secondCurrBlock.style.opacity = '0'
        sCardPrice('22 000 ₴')
        setCurrentCurrency(1)
    }
    const USDSelect = ({setCardPrice}) => {
        let secondCurrBlock = document.getElementById("s_curr_block")

        setValute("$ USD")   

        secondCurrBlock.style.height = "0vh"
        secondCurrBlock.style.opacity = '0'
        setCurrentCurrency(1)
        sCardPrice('596 $')
    }
    const EURSelect = ({setCardPrice}) => {
        let secondCurrBlock = document.getElementById("s_curr_block")

        setValute('€ EUR')
        secondCurrBlock.style.height = "0vh"
        secondCurrBlock.style.opacity = '0'
        setCurrentCurrency(1)
        sCardPrice('533 €')
    }


    const histSwiper = () => {
        let histSwiper = document.getElementById("hist_swaper")
        let hist = document.getElementById("history_block")
        let newB = document.getElementById("new_block")


        if (currentSwiper === 1) {
            histSwiper.style.transform = 'translateX(-3.525rem)'
            hist.style.opacity = '1'
            newB.style.opacity = '0.5'
            setCurrentSwiper(0)
        }
        else {
            histSwiper.style.transform = 'translateX(3.525rem)'
            hist.style.opacity = '0.5'
            newB.style.opacity = '1'
            setCurrentSwiper(1)
        }



    }


    return (
        <div id="selectionsHeader" className="selectionsHeader">
            <div className="left_part">
                <div className="avatar_left">
                    <img src={process.env.PUBLIC_URL + '/img/avatar_sel.svg'} alt="bruh" />
                </div>

                <div className="about_user_selections">
                    <div className="user_name">Мицавка Юрій</div>
                    <div className="role_selectins">Рієлтор</div>
                </div>
                <div className="connections_block">
                    <div className="phone_icon">
                        <img src="/img/call_sel.svg" alt="bruh" />
                    </div>
                    <div className="phone_icon">
                        <img src="/img/chat_sel.svg" alt="bruh" />
                    </div>
                </div>
                <div className="header_break" />
            </div>
            <div className="right_part">
                <div className="currCon">
                    <div id="currBlock" onClick={currencySelectorOpen} className="currency_block">
                        <div id="CurrentText" className="currency_text">{valute}</div>

                    </div>
                    <div id="s_curr_block" className="second_curr_block">
                        <div id="UAH" onClick={UAHSelect} className="UAH">₴ UAH</div>
                        <div id="USD" onClick={USDSelect} className="UAH">$ USD</div>
                        <div id="EUR" onClick={EURSelect} className="UAH">€ EUR</div>
                    </div>

                </div>


                <div className="hist_new_block">
                    <div id="history_block" onClick={histSwiper} className="text_swiper">Історії</div>
                    <div id="new_block" onClick={histSwiper} className="text_swiper">Нові</div>
                    <div id="hist_swaper" className="hist_swaper"></div>
                </div>
            </div>
        </div>

    )

}