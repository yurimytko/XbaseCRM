import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { MobileHeader } from '../../components/MobileHeader/mobileHeader';
import { MobileCardSwiper } from '../../components/MobileCardSwiper/mobileCardSwiper';
import { ProductDescr } from '../../components/ProductDescr/ProductDescr';
import './dist/mobileApp.css';
import History from '../../components/HistoryBlock/history';
import { MobileFooter } from '../../components/MobileFooter/mobilefooter';



export default function MobileAppContent() {
  const location = useLocation();
  const [price, setPrice] = useState(22000);
  const [currency, setCurrency] = useState("₴")
  const [img, setImg] = useState("./img/message.svg")
  const [like, setLike] = useState(false)
  const fakedata = require('../../fakedata.json')
  const url = window.location.pathname;
  const id = parseInt(url.split("/").pop());


  useEffect(() => {
    if (location.pathname === `/selections/${id}`) {
        document.getElementById("nav_buttons_con").style.display = "none";
        document.getElementById("call").style.display = "none";
        document.getElementById("message").style.display = "none";
        document.getElementById("mobile_header").style.height = "6vh";
        document.getElementById("realtor_contact").style.display = "none"
        document.getElementById("mobile_product").style.display = "flex"

    }
    else{
        document.getElementById("nav_buttons_con").style.display = "flex";
        document.getElementById("call").style.display = "block";
        document.getElementById("message").style.display = "block";
        document.getElementById("mobile_header").style.height = "11vh";
        document.getElementById("realtor_contact").style.display = "flex"
        document.getElementById("mobile_product").style.display = "none"
        document.getElementById("mobile_product").style.display = "none"
    }
  }, [location, id]);

  return (
    <div className='mobile_app'>
    <MobileHeader fakedata={fakedata} setLike={setLike} img={img} setImg={setImg} currency={currency} price={price} setPrice={setPrice} />
    <Routes>
      <Route path='/' element={
        <main className='mobile_app_body'>
          <History />
          <MobileCardSwiper fakedata={fakedata} currency={currency} setCurrency={setCurrency} price={price} setPrice={setPrice} />
        </main>
      } />
      <Route path='/:id' element={<ProductDescr fd={fakedata} />} />
    </Routes>
    <MobileFooter like={like} setLike={setLike} img={img} />
  </div>
  );
}
