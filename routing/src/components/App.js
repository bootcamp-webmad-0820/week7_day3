import React from 'react';
import './App.css';

import Navbar from './layout/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Clothes from './pages/Clothes'
import Search from './pages/Search'

import { Switch, Route, Redirect } from 'react-router-dom'

function App() {

  const loggedInUser = undefined
  // const loggedInUser = { name: 'Popino' }

  return (
    <>
      <Navbar />

      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/profile" render={() => loggedInUser ? <Profile user={loggedInUser} /> : <Redirect to="/" />} />
        <Route path="/shop/:season/:type/:element" render={props => <Clothes {...props} />} />
        <Route path="/search" render={props => <Search {...props} />} />
      </Switch>

    </>
  )
}

export default App;
