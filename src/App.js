import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import BookList from './components/books/BookList';

import { BookProvider, BookConsumer } from './context/bookContext';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route
            path="/books"
            render={props => {
              return (
                <BookProvider>
                  <BookConsumer>
                    {store => {
                      const { dispatch } = store;
                      return <BookList dispatch={dispatch} store={store} />;
                    }}
                  </BookConsumer>
                </BookProvider>
              );
            }}
          />
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
