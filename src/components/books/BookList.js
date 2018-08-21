import React from 'react';

import Books from './Books';
import AddBookForm from './AddBookForm';
import Navbar from './Navbar';
import EditBookForm from './EditBookForm';
import { Consumer } from '../context';
import { Route, Switch } from 'react-router-dom';

class BookList extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route path="/addBook" component={AddBookForm} />
          <Route
            path="/editBook/:id"
            render={props => (
              <EditBookForm
                {...props}
                books={this.props.store.bookArray}
                dispatch={this.props.dispatch}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default BookList;
