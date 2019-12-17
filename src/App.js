import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { LogIn } from './pages/login';
import { SignUp } from './pages/signup';
import { PollsList } from './pages/polls-list';
import { PollsDetailView } from './pages/polls-detail-view';
import { PollsDetailUserView } from './pages/polls-detail-user';
import { CreatePoll } from './pages/create-poll';
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
        <Route path="/signup" component={SignUp} />
        <Route path="/polls/create" component={CreatePoll} />
        <Route path="/polls/detail" component={PollsDetailView} />
        <Route path="/polls/user/detail" component={PollsDetailUserView} />
      </BrowserRouter>
    </>
  );
}

export default App;
