import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";

import './dist/mainHeader.css'


export default function MainHeader(){

    const [title, setTittle] = useState()
    const [subtitle, setSubtitle] = useState()
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === `/`) {
            setTittle('Доброго ранку, Юрію!')
            setSubtitle('Що нового трапилося за сьгодні')
        }
        else if(location.pathname === `/clients`) {
            setTittle('Клієнти')
            setSubtitle('Всього 1 782 клієнтів')
        }
      }, [location]);

    


    return(
        <div className="main_header">
            <div className="menu_title_con">
                <div className="menu_title">{title}</div>
                <div className="menu_title_subtitle">{subtitle}</div>
            </div>
            <div className="profile_con">
                <div className="price_con">
                    <div className="price_block_main">
                        <div className="price">28 320₴</div>
                        <div className="paid">Сплачено до  28.07.2023</div>
                    </div>
                    <div className="paid_btn">
                        Поповнити
                    </div>
                </div>
                <div className="line"></div>
                <div className="profile">
                    <div className="bell_con">
                        <div className="bell"></div>
                    </div>
                    <div className="profile_name_con">
                        <div className="profile_name">
                            <div className="tag"><span>Керівник</span> </div>
                            <div className="p_name">Юрій Олексійович</div>
                        </div>
                        <div className="email">yuriyo@gmail.com</div>
                    </div>
                    <img className="main_avatar" src="./img/avatar_main.png" alt="" />
                </div>
            </div>
        </div>
    )
}