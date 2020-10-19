import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Animated } from 'react-animated-css';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          isVisible={true}
          animationInDuration={1500}
        >
          <div className="row">
            <div className="col-sm-6">
              <Link to="/station1">
                <div
                  className="dialog primary fadeIn animated"
                  id="temperature"
                >
                  <div className="title">Select station 1</div>
                </div>
              </Link>
            </div>
            <div className="col-sm-6">
              <Link to="/station20">
                <div
                  className="dialog primary fadeIn animated"
                  id="temperature"
                >
                  <div className="title">Select station 2</div>
                </div>
              </Link>
            </div>
          </div>
        </Animated>

        <main role="main" className="inner cover">
          <h1 className="cover-heading">PM Detector Real Time Dashboard</h1>
          <p className="lead">
            Wireless and Broadband Computer Networks 269430, IOT Application
            Project
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
