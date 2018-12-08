import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Footer from './components/footer';
import LandingPage from './components/landing';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Login from './components/auth/login';
import Register from './components/auth/register';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
      <div>
         <NavBar />
          <Route exact path="/" component={LandingPage} />
          <Route exact  strict path="/login" component={Login} />
          <Route exact strict  path="/register" component={Register} />

      </div>
          </Router> 
      <Footer />      
      </div>
    );
  }
}

export default App;
