import React from 'react'
import { HistoryCard } from '../HistoryCard/hisCard'

import "./dist/history.css"


export default function History(){
    return(
        <div id='history_block' className='history_block'>
            <div className="history_con">
                <div className="history_card_con">
                    <HistoryCard/>
                    <HistoryCard/>
                    <HistoryCard/>
                    <HistoryCard/>
                    <HistoryCard/>
                    <HistoryCard/>
                    <HistoryCard/>
                    <HistoryCard/>
                    <HistoryCard/>
                    <HistoryCard/>
                    <HistoryCard/>
                    <HistoryCard/>
                </div>

            </div>
        </div>
    )
}