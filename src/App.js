import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from './routes/home/Home';

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </QueryClientProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
