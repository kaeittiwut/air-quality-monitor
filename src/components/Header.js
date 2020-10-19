import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="masthead mb-auto">
          <Link to="/">
            <h2 className="text-left">
              Air quality monitoring
              <br />
              <small className="text-secondary">Real Time Dashboard</small>
            </h2>
          </Link>
          <hr />
        </div>
      </div>
    );
  }
}

export default Header;
