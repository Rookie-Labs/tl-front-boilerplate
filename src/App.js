import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Main from './components/routes/home/Main';

const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
