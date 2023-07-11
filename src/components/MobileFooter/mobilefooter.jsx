import React from "react";

import "./dist/mobilefooter.css"


export function MobileFooter({img, like, setLike}){



    const likeChanger=()=>{
        if(like === false){
            document.getElementById("big_btn").innerText = "Показати все";
            document.getElementById("big_btn").style.border = "1px solid #2FA112";
            document.getElementById("big_btn").style.background = "rgba(47, 161, 18, 0.08)";
            document.getElementById("big_btn").style.color = "#2FA112";
            setLike(true)
        }
        else{
            document.getElementById("big_btn").innerText = "Показати тільки ті, що сподобалися";
            document.getElementById("big_btn").style.border = "1px solid #FFF";
            document.getElementById("big_btn").style.background = "rgba(255, 255, 255, 0.28)";
            document.getElementById("big_btn").style.color = "#FFF";
            setLike(false)
        }
    }



    return (
        <div className="mobile_footer">
            <div className="footer">
                <div onClick={likeChanger} id="big_btn" className="big_button">
                    Надіслати ріелтору в чат
                </div>
                <div id="message_img" className="message_img">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}