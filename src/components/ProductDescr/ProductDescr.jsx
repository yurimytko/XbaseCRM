import React from 'react'
import './dist/ProductDescr.css'




export function ProductDescr({fd}) {

    const url = window.location.pathname;
    const id = parseInt(url.split("/").pop());
    const filteredElements = fd.filter(item => item.id === id);





    const pet =() => {
        if(filteredElements[0].isPet === 1){
            return (
                <p>Можна з тваринами</p>
            )
        }

    }

    const net =() => {
        if(filteredElements[0].isNet === 1){
            return (
                <p>Інтернет є</p>
            )
        }
    }

    const fridge =() => {
        if(filteredElements[0].isFridge === 1){
            return (
                <p>Холодильник є</p>
            )
        }
    }

    const furniture =() => {
        if(filteredElements[0].isFurniture === 1){
            return (
                <p>Меблі є</p>
            )
        }
    }

    const washingM =() => {
        if(filteredElements[0].isWashingMashine === 1){
            return (
                <p>Пральна машина є</p>
            )
        }
    }

    const tv =() => {
        if(filteredElements[0].isTV === 1){
            return (
                <p>Телевізор є</p>
            )
        }
    }

    const air =() => {
        if(filteredElements[0].isAirVent === 1){
            return (
              <p>Кондиціонер є</p>
            )
        }
    }

    const dish =() => {
        if(filteredElements[0].isDishwasher === 1){
            return (
              <p>Посудомийка є</p>
            )
        }
    }

    return (
        <div className="product_descr_container">
            <div className="product_text_box">
            <img className="top_image" src={process.env.PUBLIC_URL + "/img/photoProductDescr.jpg"} alt="bruh" />
                <p className='rent_text'>{(filteredElements[0].title).toUpperCase()}</p>
                <div className="info_text">
                    <img className="location_svg" src={process.env.PUBLIC_URL + "/img/LocationIcon.svg"} alt="bruh" />
                    <nobr>{filteredElements[0].location}</nobr>
                </div>
                <div className="floor_size_room_con">
                    <div className="room_count">
                               <img src={process.env.PUBLIC_URL + "/img/door-closed.svg"} alt="bruh" />
                                <nobr>{filteredElements[0].room_count}к |</nobr>
                    </div>
                    <div className="expand_count">
                               <img src={process.env.PUBLIC_URL + "/img/expand.svg"} alt="bruh" />
                                <nobr>{filteredElements[0].size} м² |</nobr>
                    </div>
                    <div className="floor_count">
                               <img src={process.env.PUBLIC_URL + "/img/stairs.svg"} alt="bruh" />
                               <nobr>{filteredElements[0].floor} із 18</nobr>
                    </div>
                </div>
                <div className="preferences_of_room">
                       <p className='preferences_text'>ЗРУЧНОСТІ</p>
                       <div className='icon_text'>
                            <img src={process.env.PUBLIC_URL + "/img/dog.svg"} alt="bruh" />
                            <div>{pet()}</div>
                       </div>
                       <div className='net_text'>
                            <img src={process.env.PUBLIC_URL + "/img/wifi.svg"} alt="bruh" />
                            <div>{net()}</div>
                       </div>
                       <div className='refrigerator_text'>
                            <img src={process.env.PUBLIC_URL + "/img/refrigerator.svg"} alt="bruh" />
                            <div>{fridge()}</div>
                       </div>
                       <div className='furniture_text'>
                            <img src={process.env.PUBLIC_URL + "/img/sofa.svg"} alt="bruh" />
                            <div>{furniture()}</div>
                       </div>
                       <div className='wash_text'>
                            <img src={process.env.PUBLIC_URL + "/img/washing machine.svg"} alt="bruh" />
                            <div>{washingM()}</div>
                       </div>
                       <div className='tv_text'>
                            <img src={process.env.PUBLIC_URL + "/img/tv.svg"} alt="bruh" />
                            <div>{tv()}</div>
                       </div>
                       <div className='air_text'>
                            <img src={process.env.PUBLIC_URL + "/img/air-vent.svg"} alt="bruh" />
                            <div>{air()}</div>
                       </div>
                       <div className='dish_text'>
                            <img src={process.env.PUBLIC_URL + "/img/dishwasher.svg"} alt="bruh" />
                            <div>{dish()}</div>
                       </div>
                    <div className="more_preferences"><p>Ще 4 зручності</p></div>
                </div>
                <div className="description_of_room">
                    <p className="title">ОПИС</p>
                    <p className="main_text">{filteredElements[0].about}</p>
                    <div className="more_description"><p>Показати більше</p></div>
                </div>
                <div className="location_block">
                    <p className="title_location">РОЗТАШУВАННЯ</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2598.4764462311723!2d23.51106197640462!3d49.36205717140488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473a4c279aac3797%3A0x284782126ba6d7aa!2z0YPQuy4g0J_QuNC70LjQv9CwINCe0YDQu9C40LrQsCwg0JTRgNC-0LPQvtCx0YvRhywg0JvRjNCy0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA4MjEwMA!5e0!3m2!1sru!2sua!4v1688476793646!5m2!1sru!2sua" title="map" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

        </div>

    )

}

