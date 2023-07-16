import React, { useState, useRef } from 'react';

import './dist/clientCard.css'



export default function ClientCard({ cardCon, counter, setCounter }) {
    const [activeCard, setActiveCard] = useState(1);
    const clientCard = useRef();
    const containerRef = useRef(null);

    const handleScroll = (event) => {
        const container = containerRef.current;
        container.scrollTo({
          left: container.scrollLeft + event.deltaY *3,
          behavior: 'smooth',
        });
      };

      const handleMouseEnter = () => {
        const v = cardCon.current;
        v.style.overflow = 'hidden';
      };
    
      const handleMouseLeave = () => {
        const v = cardCon.current;
        v.style.overflow = 'scroll';
      };



    const activeClient = () => {
        if (activeCard === 1) {
            clientCard.current.style.border = '0.05vh solid white';
            setActiveCard(2);
            setCounter(prevCounter => prevCounter + 1);
        } else {
            clientCard.current.style.border = '0.05vh solid rgba(255, 255, 255, 0)';
            setActiveCard(1);
            setCounter(prevCounter => prevCounter - 1);
        }
    };

    const handleCopyText = () => {
        const id = document.getElementById('id_block').innerText
        navigator.clipboard.writeText(id)
    };






    return (
        <div ref={clientCard} id='c_card' className="client_card">
            <div onClick={activeClient} className="left_part">
                <div className='avatar_border'>
                    <img className='avatar_icon' src="./img/Avatar.svg" alt="" />
                </div>
                <div className="client_name_con">
                    <div className="client_name">
                        <div className="client">Віталій Дуда</div>
                        <div onClick={handleCopyText} id='id_block' className="client_id"><span>ID1246</span> </div>
                    </div>
                    <div className="creation_date">
                        Створений  13.10.2022  13:19
                    </div>
                </div>
                <div className='phone_number_con'>
                    <a href='tel:+380977076258' className="p_left_part">
                        <div className="phone_number_block">
                            <div className="phone_numer">+38 (097) 707 62 58</div>
                            <img className='call' src="./img/call _b.svg" alt="" />
                        </div>
                        <div className="phone_text">Телефон</div>
                    </a>
                    <div className="p_right_part">
                        <img className='chevron' src="./img/chevron-down.svg" alt="" />
                    </div>
                </div>

                <div className="card_line"></div>

                <div className="rieltor_info_con">
                    <div className="rieltor_name_con">
                        <div className="rieltor_name">Мицавка Юрій</div>
                        <div className="emoji">💪</div>
                    </div>
                    <div className="rieltor_phone">+38 (067) 114 47 77</div>
                </div>

                <div className="card_line"></div>

                <div className="coment_con">
                    <div className="coment_block">
                        <div className="coment">Дуже топовий клієнт</div>
                        <img className='edit' src="./img/edit.svg" alt="" />
                    </div>
                    <div className="comment_title">Коментар</div>
                </div>

                <div className="card_line"></div>

                <div className="objects_block">
                    <div className="requests_con">
                        <div className="requests"><span>12</span> Запитiв</div>
                        <div className="objects"><span>3</span> Об'єкта</div>
                    </div>
                    <div className="objects_line"></div>
                    <div ref={containerRef} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} onWheel={handleScroll} className="object_carousel_con">
                        <div className="object_carousel">
                            <img className='img' src="./img/flat_photo.png" alt="" />
                            <img className='img' src="./img/flat_photo.png" alt="" />
                            <img className='img' src="./img/flat_photo.png" alt="" />
                            <div className="request_photo">
                                <img className='request_img' src="./img/megaphone_g.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="rigth_part_client">
                <div className="options_btn">
                    <img className='options_client' src="./img/options-vertical.svg" alt="" />
                    <div className="option_menu">
                        <div className="favorite_con split_style">
                            <span className='option_text'>В улюблене</span>
                            <img className='option_img' src="./img/star_b.svg" alt="" />
                        </div>
                        <div className="share_con split_style">
                            <span className='option_text'>Передати</span>
                            <img className='option_img' src="./img/users_b.svg" alt="" />
                        </div>
                        <div className="delete_con split_style">
                            <span className='option_text'>Видалити</span>
                            <img className='option_img 'src="./img/delete.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="option_line"></div>
                <img className='client_arrow' src="./img/arrow-right_w.svg" alt="" />
            </div>
        </div>
    )
}