// src/MyCard.jsx
import React from 'react';
import Tags from './Tags';

const Card = ({ image, name, description, tagText, tagColor }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <Tags text={tagText} color={tagColor}/>
      </div>
    </div>
  );
};

export default Card;
