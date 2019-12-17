import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { LogIn } from './pages/login';
import { SignUp } from './pages/signup';
import { PollsList } from './pages/polls-list';
import { PollsDetailView } from './pages/polls-detail-view';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={() => (
            <PollsList />
          )}
        />
        <Route path="/login" component={LogIn} />
        <Route path="/polls/detail" component={PollsDetailView} />
      </BrowserRouter>
    </>
  );
}

export default App;
