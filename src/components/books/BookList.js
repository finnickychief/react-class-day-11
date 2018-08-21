import React from 'react';

import Books from './Books';
import AddBookForm from './AddBookForm';
//import Navbar from './Navbar';
import EditBookForm from './EditBookForm';
import { Route, Switch } from 'react-router-dom';

class BookList extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/books/" component={Books} />
          <Route path="/books/addBook" component={AddBookForm} />
          <Route
            path="/books/editBook/:id"
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
