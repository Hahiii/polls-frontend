import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { LogIn } from './pages/login';
import { SignUp } from './pages/signup';
import { PollsList } from './pages/polls-list';
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
      </BrowserRouter>
    </>
  );
}

export default App;
