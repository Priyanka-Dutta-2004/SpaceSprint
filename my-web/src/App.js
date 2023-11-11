import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Events from './components/pages/Events';
import Stories from './components/pages/Stories';
import Businesses from './components/pages/Business';
import Community from './components/pages/Community';
import Offers from './components/pages/Offers';
import SignUp from './components/pages/SignUp';
import { Switch } from 'react-router-dom/cjs/react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/stories' component={Stories} />
          <Route path='/events' component={Events} />
          <Route path='/businesses' component={Businesses} />
          <Route path='/community' component={Community} />
          <Route path='/offers' component={Offers} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
