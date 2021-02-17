/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagic,
  faPaintBrush,
  faSitemap
} from '@fortawesome/free-solid-svg-icons';
import { useRecoilValue } from 'recoil';
import { chosenTheme } from '../store/layout.atoms';

const Card = ({ image, heading, body, links }) => {
  const [icon, setIcon] = useState(faMagic);
  const theme = useRecoilValue(chosenTheme);

  useEffect(() => {
    if (image === 'dependencies') setIcon(faMagic);
    if (image === 'architecture') setIcon(faSitemap);
    if (image === 'styles') setIcon(faPaintBrush);
  }, []);

  return (
    <div className={theme === 'light' ? 'card light-theme' : 'card dark-theme'}>
      <FontAwesomeIcon icon={icon} className="card__image light-theme" />
      <h2 className="card__heading">{heading}</h2>
      {body}
      {links && (
        <ul>
          {links.map((link, index) => (
            <li key={index.toString()}>
              <a href={link.src} target="_blank" rel="noreferrer">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Card;
