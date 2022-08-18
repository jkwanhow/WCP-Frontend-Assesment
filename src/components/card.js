import { useState, useEffect } from 'react';
import "./card.css";

function Card(props) {
    return(
        <div className="card">
            <div>{JSON.stringify(props.data)}</div>
            {props.data && <img src={props.data.avatar} />}
            
        </div>
    );
}

export default Card;