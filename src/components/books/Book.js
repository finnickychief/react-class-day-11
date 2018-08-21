import React from 'react';
import { deleteBook } from '../../actions/bookActions';

class Book extends React.Component {
  deleteHandler = dispatch => {
    deleteBook(this.props.book, dispatch);
  };

  editHandler = dispatch => {
    this.props.history.push('/books/editBook/' + this.props.book.id);
  };

  render() {
    const { book, dispatch } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
          <p className="card-text">{book.description}</p>
          <div className="card-footer">{book.price}</div>
          <button
            className="btn btn-warning"
            onClick={this.editHandler.bind(this, dispatch)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={this.deleteHandler.bind(this, dispatch)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

/*


*/

export default Book;
// Default is the default import when you do not destructure an import.
// export Page;
// import {Page} from 'Book.js' <- {} is required for grabbing a specific export out of a js file
// import Book from 'Book.js' <- when you want the default, just use the name you want to refer to it by.
