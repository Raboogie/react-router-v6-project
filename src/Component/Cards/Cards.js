import React, {useState} from 'react';
import {CardsData} from "../Data/CardData";
import './Cards.css';

const Cards = () => {
    // eslint-disable-next-line
    const [boxes, setBoxes] = useState(CardsData)
    return (
        <>
            <div className="box-section">
                <div className="boxes-container">
                        <div className="cards">
                            {boxes.map(({id, title, desc}) =>(
                                <div key={id} className="card">
                                    <h2>{title}</h2>
                                    <p>{desc}</p>
                                </div>
                            ))}
                        </div>
                </div>
            </div>



        </>
    );
};

export default Cards;