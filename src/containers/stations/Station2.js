import React, { Component } from 'react';
import Monitor from '../../components/monitor/Monitor';
import { Link } from 'react-router-dom';
import { Animated } from 'react-animated-css';

class Station2 extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <Link to="/station1">
              <div className="dialog primary" id="temperature">
                <div className="title">Select station 1</div>
              </div>
            </Link>
          </div>
          <div className="col-sm-6">
            <Link to="/station2">
              <div className="dialog primary" id="temperature">
                <div className="title">Select station 2</div>
              </div>
            </Link>
          </div>
        </div>
        <Animated
          animationIn="fadeInUp"
          animationOut="fadeOut"
          isVisible={true}
        >
          <div className="dialog info">
            <div className="title1">This is station 2</div>
          </div>
          <Monitor />
        </Animated>
      </div>
    );
  }
}

export default Station2;
