import React from 'react';
import Button from './ui/Button';
import Card from './ui/Card';

// comment-test

const Main = () => {
  return (
    <main className="hero">
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h1>Turin Labs x Satoshi's G.</h1>
      <p>
        React-based Web App boilerplate to be used as starting point for React
        SPAs
      </p>
      <Button />
      <div className="features">
        <Card image="" heading="Heading" body="body" />
        <Card />
        <Card />
      </div>
    </main>
  );
};

export default Main;
