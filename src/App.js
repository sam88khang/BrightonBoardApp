import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DesignerNavbar from './Components/DesignerNavbar';
import Contact from './Components/Contact';
import HomePage from './Components/HomePage';
import ControlledCarousel from './Components/Carousel';
import Jobs from './Components/Jobs';
import AdvertiseJobs from './Components/AdvertiseJobs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {

  render() {
    return (
      <div>

        <DesignerNavbar />

        <Router>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/home">
              <ControlledCarousel />
            </Route>
            <Route path="/jobs">
              <Jobs />
            </Route>
            <Route path="/advertise_jobs">
              <AdvertiseJobs/>
            </Route>
            <Route path="/users">
              <Jobs />
            </Route>
            <Route path="/">
              <ControlledCarousel />
            </Route>

          </Switch>

        </Router>



      </div>

    );
  }
}


export default App;
