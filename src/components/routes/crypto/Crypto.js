import React from 'react';

const Crypto = () => {
  return (
    <main className="crypto-components">
      <h1 className="crypto-components__heading">Crypto page</h1>
      <div className="crypto-components__cards">
        <section className="cards__upper-row">
          <div className="cards__upper-row--graph">Graph</div>
          <div className="cards__upper-row--top-cryptos">Top cryptos</div>
        </section>
        <section className="cards__lower-row">
          <div className="cards__lower-row">Table</div>
        </section>
      </div>
    </main>
  );
};

export default Crypto;
