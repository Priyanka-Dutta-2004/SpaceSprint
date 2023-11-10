import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Stories from './components/pages/Stories';
import Offers from './components/pages/Offers';
import SignUp from './components/pages/SignUp';
import Settings from './components/pages/Settings';
import { Switch } from 'react-router-dom/cjs/react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/stories' component={Stories} />
          <Route path='/offers' component={Offers} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/settings' component={Settings} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
