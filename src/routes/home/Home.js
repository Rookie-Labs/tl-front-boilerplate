import React from 'react';
import { useRecoilValue } from 'recoil';
import CTA from '../../generic_components/ui/CTA';
import Card from '../../generic_components/ui/Card';
import copies from '../../data/copies';
import Bitcoin from '../../assets/bitcoin_comp.svg';
import { chosenTheme } from '../../generic_components/store/layout.atoms';

const Home = () => {
  const theme = useRecoilValue(chosenTheme);

  return (
    <main
      className={theme === 'light' ? 'main light-theme' : 'main dark-theme'}
    >
      <section
        className={
          theme === 'light' ? 'main__hero light-theme' : 'main__hero dark-theme'
        }
      >
        <h1 className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
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
        <div className="hero__actions">
          <CTA />
        </div>
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

export default Home;
