import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/layout/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
