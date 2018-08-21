import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import BookList from './components/books/BookList';
import ContactManager from './components/contacts/ContactManager';

import { BookProvider, BookConsumer } from './context/bookContext';
import { ContactProvider, ContactConsumer } from './context/contactContext';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <BookProvider>
            <Route
              path="/books"
              render={props => {
                return (
                  <BookConsumer>
                    {store => {
                      const { dispatch } = store;
                      return <BookList dispatch={dispatch} store={store} />;
                    }}
                  </BookConsumer>
                );
              }}
            />
          </BookProvider>
          <ContactProvider>
            <Route
              path="/contacts"
              render={props => {
                return (
                  <ContactConsumer>
                    {store => {
                      const { dispatch } = store;
                      return (
                        <ContactManager dispatch={dispatch} context={store} />
                      );
                    }}
                  </ContactConsumer>
                );
              }}
            />
          </ContactProvider>

          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
