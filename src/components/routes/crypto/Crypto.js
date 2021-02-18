/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Table, Card } from 'antd';
// import 'antd/dist/antd.css';
import { getCryptoCurrencies } from '../../../styles/crypto.services';

/* PROPERTIES
========================================================= */

const tableColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Rank',
    dataIndex: 'rank',
    key: 'rank'
  },
  {
    title: 'Price',
    dataIndex: 'priceUsd',
    key: 'priceUsd'
  },
  {
    title: 'Symbol',
    dataIndex: 'symbol',
    key: 'symbol'
  }
];

const Crypto = () => {
  const { isLoading, isSuccess, data } = useQuery(
    'cryptos',
    getCryptoCurrencies,
    { refetchInterval: 10000 }
  );

  if (isLoading) return <p>Is loading</p>;

  const topFive = data.slice(0, 5);

  return (
    <main className="crypto-components">
      <h1 className="crypto-components__heading">Components testing</h1>
      <h4>
        <Link to="/">Go back</Link>
      </h4>
      <div className="crypto-components__cards">
        <section className="cards__upper-row">
          <div className="cards__upper-row--graph">Graph</div>
          <div className="cards__upper-row--top-cryptos">
            <Card className="card">
              { 
                isSuccess && data && (
                  topFive.map((token, index) => (
                    <p key={token.name}><span>{index+1} </span>{token.name}</p>
                    )
                  ))
              }
            </Card>
          </div>
        </section>
        <section className="cards__lower-row">
          <Table
            dataSource={data}
            columns={tableColumns}
            pagination={{ position: 'bottomRight' }}
            className='table'
          />
        </section>
      </div>
    </main>
  );
};

export default Crypto;
