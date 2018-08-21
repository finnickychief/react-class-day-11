import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  let linkStyle = {
    cursor: 'pointer'
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        Day 11 Application
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/books" className="nav-link" style={linkStyle}>
              Books <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contacts" className="nav-link" style={linkStyle}>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
