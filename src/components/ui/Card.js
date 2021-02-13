/* eslint-disable react/prop-types */
import React from 'react';

const Card = ({image, heading, body}) => {
  return (
    <div className="card">
      <img src={image} alt="Card title" className="card__image" />
      <h3 className="card__heading">{heading}</h3>
      <p className="card__body">{body}</p>
    </div>
  );
};

export default Card;
