/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagic,
  faPaintBrush,
  faSitemap
} from '@fortawesome/free-solid-svg-icons';

const Card = ({ image, heading, body }) => {
  const [icon, setIcon] = useState(faMagic);

  useEffect(() => {
    if (image === 'dependencies') setIcon(faMagic);
    if (image === 'architecture') setIcon(faSitemap);
    if (image === 'styles') setIcon(faPaintBrush);
  }, []);

  return (
    <div className="card">
      <FontAwesomeIcon icon={icon} className="card__image" />
      <h2 className="card__heading">{heading}</h2>
      <p className="card__body">{body}</p>
    </div>
  );
};

export default Card;
