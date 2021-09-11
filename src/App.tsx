import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './views/Home'
import Landing from './views/Landing'
import Dashboard from './views/Dashboard'
import Bet from './views/Bet'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (

      <Router>
        <Navbar/>
        <div className="middlesec">
          <Switch>
            <Route exact path="/">
                <Landing />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/matches">
                <Dashboard />
              </Route>
              <Route path="/bet">
                <Bet />
              </Route>
          </Switch>
        </div>
        <Footer/>
      </Router>
  );
}

export default App;
