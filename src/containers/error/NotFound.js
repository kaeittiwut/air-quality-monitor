import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  NotFound() {
    return (
      <div className="container text-center">
        <h1 className="mt-5" style={{ fontSize: 120 }}>
          404
        </h1>
        <h1 className="mt-4">Oops! </h1>
        <h4 className="title text-center mt-4">
          Sorry, the page you are looking for cannot be found.
        </h4>
        <br />
        <Link
          to="/"
          className="btn btn-secondary btn-lg active"
          role="button"
          aria-pressed="true"
        >
          Return Homepage
        </Link>
      </div>
    );
  }
  render() {
    return <div>{this.NotFound()}</div>;
  }
}

export default NotFound;
