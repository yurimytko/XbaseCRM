import React , { useState } from "react"
import './dist/loginPage.css'

export default function LoginPage() {
    const [isAccount, setIsAccount] = useState(1)
    const [regButtonText, setRegButtonText] = useState("Заповнити форму")
    let a = 0
    const [count, setCount] = useState(a);

    const swaperReg = () =>{
        let swap = document.getElementById("swaper_block")
        let snow1 = document.getElementById("pattern_box1")
        let snow2 = document.getElementById("pattern_box2")
        let regCon = document.getElementById("register_container")
        let inpCon = document.getElementById("inputs_container")
        let logCon = document.getElementById("loginCon")
        let inpLogCon = document.getElementById("input_con_login")
        let logBtn = document.getElementById("loginBtn")
        let subText1 = document.getElementById("RegSubText")
        let subText2 = document.getElementById("regSubText2")
        let logo = document.getElementById("XLogo")
        let txhCon = document.getElementById("ThanksCon")
        let blurdiv = document.getElementById("blurDiv")
        let filterdiv = document.getElementById("filter")

        swap.style.transform = 'skewx(-24deg) translateX(-70vw)'
        snow1.style.left = '50vh'
        snow2.style.left = '25vh'
        subText1.style.opacity = "0.4"
        subText2.style.opacity = "0.4"


        regCon.style.marginLeft = '35vh'
        regCon.style.marginRight = '65vh'
        regCon.style.marginBottom = '25vh'
        
        inpCon.style.height='30vh'

        inpLogCon.style.overflow = 'hidden'
        inpLogCon.style.height = '0vh'

        swap.style.width = '53.4vw'
        swap.style.transform = 'skewx(-24deg) translateX(-66.6vw)'
        snow1.style.top = '35vh'
        snow2.style.top = '-35vh'

        logCon.style.marginTop = '30vh'
        logCon.style.marginRight = '60vh'


        logBtn.style.marginTop = '2vh'

        a = 1
        setCount(a + 1)

        if(count === 2){
            swap.style.opacity = '0'
            regCon.style.opacity = '0'
            logCon.style.opacity = '0'
            logo.style.marginLeft = '100vh'
            logo.style.transition = '.4s'
            txhCon.style.opacity = '100%'
            txhCon.style.zIndex = '3'
            filterdiv.style.zIndex = '2'
            blurdiv.style.zIndex = '2'
            blurdiv.style.opacity = '100%'
            logo.style.zIndex= '3'
        }
        



        setRegButtonText("Зареєструватися")
        setIsAccount(0)
    }

    

    const swaperEnter = () =>{
        
        let swap = document.getElementById("swaper_block")
        let snow1 = document.getElementById("pattern_box1")
        let snow2 = document.getElementById("pattern_box2")
        let subText1 = document.getElementById("RegSubText")
        let subText2 = document.getElementById("regSubText2")
        let regCon = document.getElementById("register_container")
        let inpCon = document.getElementById("inputs_container")
        let logCon = document.getElementById("loginCon")
        let inpLogCon = document.getElementById("input_con_login")
        let logBtn = document.getElementById("loginBtn")

        swap.style.transform = 'skewx(-24deg) translateX(0)'
        swap.style.width = '53.4vw'
        snow1.style.left = '5vh'
        snow2.style.left = '-10vh'
        snow1.style.top = '35vh'
        snow2.style.top = '-35vh'
        subText1.style.opacity = "0.4"
        subText2.style.opacity = "0.4"

        regCon.style.marginLeft = '15vh'
        regCon.style.marginRight = '68vh'
        regCon.style.marginBottom = '0vh'

        inpCon.style.height='0vh'

        inpLogCon.style.height = '17.5vh'

        logCon.style.marginTop = '0vh'
        logCon.style.marginRight = '0vh'
        logCon.style.marginLeft = '0vh'


        setCount(prevCount => prevCount + 1)

        

        setRegButtonText("Заповнити форму")
        setIsAccount(1)
    }

    const sizerEnter = () => {
        let swap = document.getElementById("swaper_block")
        let snow1 = document.getElementById("pattern_box1")
        let snow2 = document.getElementById("pattern_box2")
        let subText1 = document.getElementById("RegSubText")
        let subText2 = document.getElementById("regSubText2")
        let logCon = document.getElementById("loginCon")
        let regCon = document.getElementById("register_container")


        if(isAccount === 1){
            swap.style.transform = 'skewx(-24deg) translateX(0vw)'
            swap.style.width = '53.4vw'
            snow1.style.top = '35vh'
            snow2.style.top = '-35vh'
            subText1.style.opacity = "0.4"
            regCon.style.marginLeft ="15vh"


            
        }else{
            swap.style.transform = 'skewx(-24deg) translateX(-66.6vw)'
            swap.style.width = '55.4vw'
            snow1.style.top = '35vh'
            snow2.style.top = '-35vh'
            subText2.style.opacity = '0.4'
            regCon.style.marginLeft = "35vh"

            

            
        }
    }
    const sizerOut = () => {
        let swap = document.getElementById("swaper_block")
        let snow1 = document.getElementById("pattern_box1")
        let snow2 = document.getElementById("pattern_box2")

        let subText1 = document.getElementById("RegSubText")
        let subText2 = document.getElementById("regSubText2")



        let regCon = document.getElementById("register_container")


        if(isAccount === 1){
            subText1.style.opacity = "1"
            swap.style.transform = 'skewx(-24deg) translateX(3.4vw)'
            swap.style.width = '53.4vw'
            snow1.style.top = '43vh'
            snow2.style.top = '-30vh'

            regCon.style.marginLeft = "22vh"
            


        }else{
            swap.style.transform = 'skewx(-24deg) translateX(-70vw)'
            swap.style.width = '53vw'
            snow1.style.top = '43vh'
            snow2.style.top = '-30vh'
            subText2.style.opacity = '1'
           
            regCon.style.marginLeft = "28vh"

            


        }
        
        
    }
  
  
        
        
  

    


    return (
        <div className="LoginPage" >
            <img id="XLogo"  onMouseEnter={isAccount === 0 ? sizerEnter: console.log("")} className="auth_logo" src="./img/logo.png" alt="" />
            <div className="form_main">
                <div className="forms_container">
                    <div id="register_container"  onMouseEnter={isAccount === 0 ? sizerEnter: console.log("")} className="register_container">
                        <div className="register_text">Зареєструватись</div>
                        <div id="RegSubText" className="grey_text">Заповніть невелику форму та подайте заявку на модерацію, щоб почати користуватися сервісом.</div>
                        <div id="inputs_container" className="inputs_container">
                            <input className="input_name_main" type="text" placeholder="Ім'я" />
                            <input className="input_name" type="text" placeholder="Номер телефону" />
                            <input className="input_name" type="text" placeholder="Email" />
                            <input className="input_name" type="text" placeholder="Пароль" />

                        </div>
                        <button id='buttonReg' onClick={swaperReg} className="enter_form">{regButtonText}</button>
                    </div>
                    <div id='loginCon' onMouseEnter={isAccount === 1 ? sizerEnter: console.log("")} className="login_container">
                        <div className="welcome_text">З поверненням!</div>
                        <div id="regSubText2" className="grey_text_second">Швидше подивися, що нового сталося, доки тебе не було!</div>
                        
                        <div id='input_con_login' className="input_container">
                            <input className="input_login" type="text" placeholder="Email" />
                            <input className="input_password" type="text" placeholder="Пароль" />
                        </div>
                        <button id="loginBtn" onClick={swaperEnter} className="enter_form_right">Увійти</button>
                    
                    </div>
                </div>
            </div>
            <div id="ThanksCon" className="Thanks">
                <div className="ThanksText">
                    <div className="form_con_thnx">
                        <div className="reg_thanks">Дякуємо за реєстрацію!</div>
                        <div className="wait_response">Ми зв'яжемося з Вами найближчим часом, для перевірки данних</div>
                        <button className="home_button">На головну </button>
                    </div>
                    
                </div>
            </div>
            <div id="blurDiv" className="blur_div">
            </div>
            <div id="filter" className="filter-con">
            </div>
            <div onMouseOver={sizerEnter} onMouseOut={sizerOut}  id="swaper_block" className="swaper_block">
                <div className="pattern_box" id="pattern_box1" >
                    <div className="background_img" id="background_img1" />
                </div>
                <div className="pattern_box" id="pattern_box2" >
                    <div className="background_img" id="background_img2"/>
                </div>

            </div>
        </div>
    )
}