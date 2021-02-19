// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <Link to="/crypto">
      <button type="button" className="secondary-button">
        See some components
      </button>
    </Link>
  );
};

export default Button;
