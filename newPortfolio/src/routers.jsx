import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Switch, Redirect, MemoryRouter } from 'react-router';
import App from './App';
import ProjetosFullGit from './Pages/ProjetosFullGit';

function RoutersApp() {
  return (
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Switch>
          <Route exact path="/" element={App} />
          <Route exact path="/projetosFull" component={ProjetosFullGit} />
          <Redirect from="*" to="/" />
        </Switch>
      </Routes>
    </MemoryRouter>
  );
}

export default RoutersApp;
