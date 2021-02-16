import React from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import copies from '../data/copies';
import Bitcoin from '../../assets/bitcoin_comp.svg';

const Main = () => {
  return (
    <main className="main">
      <section className="main__hero">
        <h1>
          Turin Labs{' '}
          <span className="span__image">
            <img src={Bitcoin} alt="Bitcoin" />
          </span>{' '}
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Satoshi's G.
        </h1>
        <p>
          React-based Web App boilerplate to be used as starting point for React
          SPAs
        </p>
        <Button />
      </section>
      <section className="main__features">
        <Card
          image="dependencies"
          heading={copies.feature1.heading}
          body={copies.feature1.body}
          links={copies.feature1.links}
        />
        <Card
          image="architecture"
          heading={copies.feature2.heading}
          body={copies.feature2.body}
          links={null}
        />
        <Card
          image="styles"
          heading={copies.feature3.heading}
          body={copies.feature3.body}
          links={null}
        />
      </section>
    </main>
  );
};

export default Main;
