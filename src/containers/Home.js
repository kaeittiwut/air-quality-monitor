import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="row">
          <div className="col-sm-6">
            <Link to="/station1">
              <div className="dialog primary fadeIn animated" id="temperature">
                <div className="title">Select node 001</div>
              </div>
            </Link>
          </div>
          <div className="col-sm-6">
            <Link to="/station20">
              <div className="dialog primary fadeIn animated" id="temperature">
                <div className="title">Select node 002</div>
              </div>
            </Link>
          </div>
        </div>
        <main role="main" className="inner cover">
          <h1 className="cover-heading">Cover your page.</h1>
          <p className="lead">
            Cover is a one-page template for building simple and beautiful home
            pages. Download, edit the text, and add your own fullscreen
            background photo to make it your own.
          </p>
          <p className="lead">
            <Link to="/about" className="btn btn-lg btn-secondary">
              Learn more
            </Link>
          </p>
        </main>
      </div>
    );
  }
}

export default Home;
