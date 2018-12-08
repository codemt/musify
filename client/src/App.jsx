import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Footer from './components/footer';
import LandingPage from './components/landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <LandingPage />
        <Footer />
      </div>
    );
  }
}

export default App;
