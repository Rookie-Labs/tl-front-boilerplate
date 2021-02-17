import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Main from './components/routes/home/Main';
import Crypto from './components/routes/crypto/Crypto';

const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/crypto" component={Crypto} />
        </Switch>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
