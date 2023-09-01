import React from 'react';


const Card = ({ color, title }) => {
  return (
    <div className="card" style={{ width: "240px", height:"203px", backgroundColor: color , color: 'white', borderRadius: '3px'}}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">la mayor parte del contenido de la tarjeta.</p>
      </div>
    </div>
  );
};

export default Card;
