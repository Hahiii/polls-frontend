import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { LogIn } from './pages/login';
import { SignUp } from './pages/signup';
import { PollsList } from './pages/polls-list';
import { PollsDetailView } from './pages/polls-detail-admin';
import { PollsDetailUserView } from './pages/polls-detail-user';
import { CreatePoll } from './pages/create-poll';
import './App.css';

function App() {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('id');

  return (
    <>
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={() => (
            <PollsList
              token={token}
              loggedIn={userId}
            />
          )}
        />
        <Route path="/login" render={() => (
          <LogIn
            loggedIn={userId}
          />
        )} />
        <Route path="/signup" render={() => (
          <SignUp
            loggedIn={userId}
          />
        )} />
        <Route path="/polls/create" render={() => (
          <CreatePoll
            token={token}
            loggedIn={userId}
          />
        )} />
        <Route path="/polls/detail/:id" render={() => (
          <PollsDetailView
            token={token}
          />
        )} />
        <Route path="/polls/user/detail/:id" render={() => (
          <PollsDetailUserView />
        )} />
      </BrowserRouter>
    </>
  );
}

export default App;
