import * as React from 'react';
import './App.css';
import NavBar from './components/layouts/navbar';
import Footer from './components/layouts/footer';

class App extends React.Component {
  public render() {
    return (
      <div>
       <NavBar />
       <Footer />
      </div>
    );
  }
}

export default App;
