import React from 'react';

function Card({ image, title, text, cardClass }) {
    return (
        <div className={`card ${cardClass}`}>
            <img src={image} alt={title} className="cardImg" />
            <h2 className='cardTitle'>{title}</h2>
            <p className='cardText'>{text}</p>
        </div>
    );
}

export default Card;