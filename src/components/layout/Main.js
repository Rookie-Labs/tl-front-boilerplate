import React from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { feature1, feature2, feature3 } from '../data/copies';

const Main = () => {
  return (
    <main className="main">
      <section className="main__hero">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h1>Turin Labs x Satoshi's G.</h1>
        <p>
          React-based Web App boilerplate to be used as starting point for React
          SPAs
        </p>
        <Button />
      </section>
      <section className="main__features">
        <Card
          image="dependencies"
          heading={feature1.heading}
          body={feature1.body}
        />
        <Card
          image="architecture"
          heading={feature2.heading}
          body={feature2.body}
        />
        {/* eslint-disable-next-line prettier/prettier */}
        <Card image="styles" heading={feature3.heading} body={feature3.body} />
      </section>
    </main>
  );
};

export default Main;
