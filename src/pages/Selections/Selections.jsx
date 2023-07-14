import React, { useState } from 'react';
import './dist/Selections.css'
import { Route, Routes, useLocation } from 'react-router-dom';
import SelectionsHeader from '../../components/Selections/SelectionsHeader/selectionsHeader';
import SelectionsMain from '../../components/Selections/SelectionsMain/SelectionsMain';


export default function Selections() {
    const [cardPrice, setCardPrice] = useState('22000 ₴');

    
    return(
        <div className='Selections'>
            <SelectionsHeader sCardPrice={setCardPrice} />
            <SelectionsMain cardPrice={cardPrice} />

        </div>
    )
}