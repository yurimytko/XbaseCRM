import React from 'react';
import SelectionCardDesktop from '../SelectionsCardDesktop/SelectionsCardDesktop';
import './dist/SelectionsMain.css';

export default function SelectionsMain({cardPrice}){
    


    return(
        <div className="SelectionsMain">
            <SelectionCardDesktop cardPrice={cardPrice}/>
            <SelectionCardDesktop cardPrice={cardPrice}/>

            <SelectionCardDesktop cardPrice={cardPrice}/>
            <SelectionCardDesktop cardPrice={cardPrice}/>
            <SelectionCardDesktop cardPrice={cardPrice}/>
            <SelectionCardDesktop cardPrice={cardPrice}/>

        </div>
    )
}
