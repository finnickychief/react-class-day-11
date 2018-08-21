import React from 'react';
import { Consumer } from '../context';
import { CHANGE_ROUTE } from '../types';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  handleRoute = (dispatch, route) => {
    dispatch({
      type: CHANGE_ROUTE,
      payload: { route: route }
    });
  };

  render() {
    return (
      <Consumer>
        {store => {
          const { dispatch } = store;

          return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand">Navbar</a>
              <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link to="/">
                      View <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/addBook">Add</Link>
                  </li>
                </ul>
              </div>
            </nav>
          );
        }}
      </Consumer>
    );
  }
}

export default Navbar;
