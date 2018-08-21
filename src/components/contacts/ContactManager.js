import React, { Component } from 'react';
import ContactCard from './ContactCard';
import AddContactForm from './AddContactForm';
import AddEditForm from './AddEditForm';
import { Switch, Route } from 'react-router-dom';

class ContactManager extends Component {
  render() {
    const { dispatch, contacts } = this.props.context;

    return (
      <React.Fragment>
        <div className="container">
          <Switch>
            <Route
              exact
              path="/contacts"
              render={props => (
                <div>
                  {this.props.context.contacts.map(contact => (
                    <ContactCard
                      contact={contact}
                      key={contact.id}
                      goToEdit={true}
                      deleteContact={true}
                      dispatch={dispatch}
                      history={props.history}
                    />
                  ))}
                </div>
              )}
            />
            <Route
              path="/contacts/addContact"
              render={props => (
                <AddContactForm {...props} dispatch={dispatch} />
              )}
            />
            <Route
              path="/contacts/addEditForm/:id"
              render={props => (
                <AddEditForm
                  {...props}
                  dispatch={this.props.context.dispatch}
                  history={props.history}
                  contacts={contacts}
                />
              )}
            />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactManager;
