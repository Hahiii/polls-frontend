import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { LogIn } from './pages/login';
import { SignUp } from './pages/signup';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={() => (
            <SignUp />
          )}
        />
        <Route path="/login" component={LogIn} />
      </BrowserRouter>
    </>
  );
}

export default App;
