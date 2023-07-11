import React, { useCallback ,useEffect , useState , useRef} from "react"
import Card from "../MobileCard/card"
import "./dist/mobileCardSwiper.css"


export function MobileCardSwiper({ fakedata, price, setPrice, currency, setCurrency }) {

    const [CardViewer , setCardViewer] = useState([])
    const cardSwiper = useRef()

    const validator = useCallback(
        () =>{
            if(CardViewer.length === 1 && cardSwiper.current && cardSwiper.current.firstChild){
                cardSwiper.current.firstChild.style.top = '2.5vh'
                cardSwiper.current.firstChild.style.filter = 'none'
                cardSwiper.current.firstChild.style.height = '45vh'
                cardSwiper.current.firstChild.style.width = '36vh'
            }else if(CardViewer.length === 2){
                cardSwiper.current.firstChild.style.top = '1.2vh'
                cardSwiper.current.firstChild.style.filter = 'brightness(60%)'
                cardSwiper.current.firstChild.style.height = '42.75vh'
                cardSwiper.current.firstChild.style.width = '34.2vh'

                cardSwiper.current.childNodes[1].style.top = '2.5vh'
                cardSwiper.current.childNodes[1].style.filter = 'none'
                cardSwiper.current.childNodes[1].style.height = '45vh'
                cardSwiper.current.childNodes[1].style.width = '36vh'
            }else if(CardViewer.length === 3){
                cardSwiper.current.firstChild.style.top = '0'
                cardSwiper.current.firstChild.style.filter = 'brightness(60%)'
                cardSwiper.current.firstChild.style.height = '39.4vh'
                cardSwiper.current.firstChild.style.width = '31.51vh'

                cardSwiper.current.childNodes[2].style.top = '1.2vh'
                cardSwiper.current.childNodes[2].style.filter = 'brightness(60%)'
                cardSwiper.current.childNodes[2].style.height = '42.75vh'
                cardSwiper.current.childNodes[2].style.width = '34.2vh'

                cardSwiper.current.childNodes[2].style.top = '2.5vh'
                cardSwiper.current.childNodes[2].style.filter = 'none'
                cardSwiper.current.childNodes[2].style.height = '45vh'
                cardSwiper.current.childNodes[2].style.width = '36vh'
            }
        }
        
        ,[CardViewer.length])

    useEffect(
        () => {
            let CardViewer = []
            for (let i = 0; i < 3; i++) {
                CardViewer.push(fakedata[i])
            }
            setCardViewer(CardViewer)
            
            validator()
        }


        , [fakedata,setCardViewer,validator])
        


    return (
        <div ref={cardSwiper} id="swiper" className="CardSwiperContainer">
            {CardViewer.map((data) => (
                <Card key={data.id} fd={data} currency={currency} setCurrency={setCurrency} price={price} setPrice={setPrice} />
            )
            )}

        </div>
    )
}
