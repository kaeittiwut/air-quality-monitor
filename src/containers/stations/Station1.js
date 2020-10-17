import React, { Component } from 'react';
import Monitor from '../../components/monitor/Monitor';
import { Link } from 'react-router-dom';

class Station1 extends Component {
  render() {
    return (
      <div className="Home">
        <div className="row">
          <div className="col-sm-6">
            <Link to="/station1">
              <div className="dialog primary fadeIn animated" id="temperature">
                <div className="title">Select station 1</div>
              </div>
            </Link>
          </div>
          <div className="col-sm-6">
            <Link to="/station2">
              <div className="dialog primary fadeIn animated" id="temperature">
                <div className="title">Select station 2</div>
              </div>
            </Link>
          </div>
        </div>
        <Monitor />
      </div>
    );
  }
}

export default Station1;
