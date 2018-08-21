// Context for BookList section of the application
import React from 'react';
import uuid from 'uuid';
import {
  ADD_BOOK,
  DELETE_BOOK,
  CHANGE_ROUTE,
  UPDATE_BOOK
} from '../actions/types';

const Context = React.createContext();

// 3 Parts for context:

// Reducers
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        bookArray: [action.payload, ...state.bookArray],
        route: 'viewBooks'
      };
    case DELETE_BOOK: {
      return {
        ...state,
        bookArray: state.bookArray.filter(book => book.id !== action.payload.id)
      };
    }
    case CHANGE_ROUTE: {
      return {
        ...state,
        route: action.payload.route,
        currentBook: action.payload.book ? action.payload.book : null
      };
    }
    case UPDATE_BOOK: {
      return {
        ...state,
        bookArray: state.bookArray.map(
          book => (book.id === action.payload.id ? action.payload : book)
        ),
        route: 'viewBooks',
        currentBook: null
      };
    }
    default:
      return state;
  }
};

// Provider
export class BookProvider extends React.Component {
  state = {
    bookArray: [
      {
        id: uuid(),
        title: 'Harry Potter',
        description: 'Wizard School stuff',
        author: 'JK Rowling',
        price: '14.99'
      },
      {
        id: uuid(),
        title: 'Name of the Wind',
        description: 'Edgy Wizard school stuff',
        author: 'Patrick Rothfuss',
        price: '12.50'
      },
      {
        id: uuid(),
        title: 'Wheel of Time',
        description: 'A few High fantasy novels',
        author: 'Robert Jordan',
        price: '19.99'
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

// Consumer
export const BookConsumer = Context.Consumer;
