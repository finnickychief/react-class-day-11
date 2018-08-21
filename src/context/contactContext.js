import React from 'react';
import { getContacts } from '../actions/contactActions';
import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT
} from '../actions/types';

// Create the context
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload.map(contact => {
          contact.company = contact.company.name;
          return contact;
        })
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
        route: 'viewContacts'
      };
    case 'SET_CONTACT': // Load the current contact so it is available for editing
      return {
        ...state,
        currentContact: action.payload
      };
    case UPDATE_CONTACT: // Apply the changes to the current contact.
      return {
        ...state,
        contacts: state.contacts.map(
          contact =>
            contact.id === action.payload.id ? action.payload : contact
        ),
        route: 'viewContacts'
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          // Grab all contacts that are NOT the one we're trying to delete.
          contact => contact.id !== action.payload
        )
      };
    case 'CHANGE_ROUTE':
      return {
        ...state,
        route: action.payload
      };
    default:
      return state;
  }
};

export class ContactProvider extends React.Component {
  // Holds the default store for our application
  state = {
    contacts: [],
    route: 'viewContacts',
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    console.log('in COmponentDidMount');
    // Get the users for our contacts
    getContacts(this.state.dispatch);
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const ContactConsumer = Context.Consumer;
