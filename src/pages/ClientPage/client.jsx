import React, { useState, useEffect,useRef } from "react";
import ClientCard from "../../components/ClientCard/clientCard";

import './dist/client.css'


export default function ClientPage() {
    const [fPunkt, setFPunkt] = useState(1)
    const [sPunkt, setsPunkt] = useState(1)
    const [arrowActive, setArrowActive] = useState(1)
    const [counter, setCounter] = useState(0)

    const cardCon = useRef()



    useEffect(() => {
        if (counter === 0) {
            document.getElementById('client_title').style.display = 'none'
            document.getElementById('client_header').style.justifyContent = 'flex-end'
        }

        else if (counter > 0) {
            document.getElementById('client_title').style.display = 'flex'
            document.getElementById('client_header').style.justifyContent = 'space-between'
        }

    }, [counter])


    const arrowClick = () => {
        if (arrowActive === 1) {
            document.getElementById("arrow_down").style.transform = "rotate(-180deg)"
            document.getElementById('available').style.height = '9.9vh'
            document.getElementById('available').style.marginTop = '0.5vh'
            setArrowActive(2)
        }
        if (arrowActive === 2) {
            document.getElementById("arrow_down").style.transform = "rotate(0deg)"
            document.getElementById('available').style.height = '0vh'
            document.getElementById('available').style.marginTop = '0vh'
            setArrowActive(1)
        }
    }


    const activeFPunkt = () => {


        if (fPunkt === 1) {
            document.getElementById('f_con').style.background = 'white'
            document.getElementById('f_punkt').style.color = '#2C2C2C'
            document.getElementById('f_punkt').style.opacity = '1'
            document.getElementById('arrow_down').style.width = '1.9vh'

            document.getElementById('s_con').style.background = 'none'
            document.getElementById('s_punkt').style.color = '#FFF'
            document.getElementById('s_punkt').style.opacity = '0.4000000059604645'

            document.getElementById('arrow_down').style.width = '1.9vh'
            setFPunkt(2)
            setsPunkt(1)
        }
        if (fPunkt === 2) {
            document.getElementById('f_con').style.background = 'none'
            document.getElementById('f_punkt').style.color = '#FFF'
            document.getElementById('f_punkt').style.opacity = '0.4000000059604645'
            document.getElementById('arrow_down').style.width = '0vh'
            document.getElementById("arrow_down").style.transform = "rotate(0deg)"
            document.getElementById('available').style.height = '0vh'
            document.getElementById('available').style.marginTop = '0vh'
            setArrowActive(1)
            setFPunkt(1)
        }
    }
    const activeSPunkt = () => {
        if (sPunkt === 1) {
            document.getElementById('s_con').style.background = 'white'
            document.getElementById('s_punkt').style.color = '#2C2C2C'
            document.getElementById('s_punkt').style.opacity = '1'
            document.getElementById('arrow_down').style.width = '1.9vh'
            document.getElementById('f_con').style.background = 'none'
            document.getElementById('f_punkt').style.color = '#FFF'
            document.getElementById('f_punkt').style.opacity = '0.4000000059604645'
            document.getElementById('arrow_down').style.width = '1.9vh'
            setsPunkt(2)
            setFPunkt(1)
        }
        if (sPunkt === 2) {
            document.getElementById('s_con').style.background = 'none'
            document.getElementById('s_punkt').style.color = '#FFF'
            document.getElementById('s_punkt').style.opacity = '0.4000000059604645'
            document.getElementById('arrow_down').style.width = '0vh'

            document.getElementById("arrow_down").style.transform = "rotate(0deg)"
            document.getElementById('available').style.height = '0vh'
            document.getElementById('available').style.marginTop = '0vh'
            setArrowActive(1)
            setsPunkt(1)
        }
    }

    return (
        <div className="client_page">
            <div id="client_header" className="client_header">
                <div id="client_title" className="client_title">Обрано {counter}</div>
                <div className="search">
                    <div className="create_new">
                        <img className="add" src="./img/add.svg" alt="" />
                    </div>
                    <div className="create_new">
                        <img className="add" src="./img/star.svg" alt="" />
                    </div>
                    <div className="create_new">
                        <img className="add" src="./img/search.svg" alt="" />
                    </div>
                    <div className="choose_block">
                        <div className="unavailable">
                            <span className="choose">Обрати</span>
                            <div className="choose_punkts">
                                <div id="f_con" className="f_con">
                                    <div onClick={activeFPunkt} id="f_punkt" className="f_punkt">20 клієнтів</div>
                                </div>
                                <div id="s_con" className="s_con">
                                    <div onClick={activeSPunkt} id="s_punkt" className="s_punkt">усі 263</div>
                                </div>


                            </div>
                            <img onClick={arrowClick} id="arrow_down" className="arrow_down" src="./img/chevron-down.svg" alt="" />
                        </div>
                        <div id="available" className="available">
                            <span className="a_punkts">Додати в улюблене</span>
                            <span className="a_punkts">Додати в улюблене</span>
                            <span className="a_punkts">Додати в улюблене</span>
                        </div>
                    </div>
                </div>
            </div>
            <div ref = {cardCon}  className="client_cards_con">
                <ClientCard cardCon = {cardCon} counter={counter} setCounter={setCounter} />
                <ClientCard cardCon = {cardCon} counter={counter} setCounter={setCounter} />
                <ClientCard cardCon = {cardCon} counter={counter} setCounter={setCounter} />
                <ClientCard cardCon = {cardCon} counter={counter} setCounter={setCounter} />
                <ClientCard cardCon = {cardCon} counter={counter} setCounter={setCounter} />
                <ClientCard cardCon = {cardCon} counter={counter} setCounter={setCounter} />
                <ClientCard cardCon = {cardCon} counter={counter} setCounter={setCounter} />
            </div>
        </div>
    )
} 