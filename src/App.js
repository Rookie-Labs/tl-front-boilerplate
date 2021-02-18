import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Main from './components/routes/home/Main';
import Crypto from './components/routes/crypto/Crypto';

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/crypto" component={Crypto} />
          </Switch>
        </QueryClientProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
