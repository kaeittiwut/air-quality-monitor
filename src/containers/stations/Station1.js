import React, { Component } from 'react';
import Monitor from '../../components/monitor/Monitor';
import { Link } from 'react-router-dom';
import { Animated } from 'react-animated-css';

class Station1 extends Component {
  constructor(props) {
    super(props);
    this.state = { station: 'station1' };
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <Link to="/station1">
              <div className="dialog primary">
                <div className="title">AQM Station 1</div>
              </div>
            </Link>
          </div>
          <div className="col-sm-6">
            <Link to="/station2">
              <div className="dialog primary">
                <div className="title">AQM Station 2</div>
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
            <div className="title1 text-white">AQM Station 1</div>
          </div>
          <Monitor pickStation={this.state.station} />
        </Animated>
      </div>
    );
  }
}

export default Station1;
