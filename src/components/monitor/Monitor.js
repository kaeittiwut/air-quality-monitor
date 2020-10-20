import React, { Component } from 'react';
import Canvas from './Canvas';
import { Animated } from 'react-animated-css';

class Monitor extends Component {
  render() {
    // console.log(this.props.pickStation);
    return (
      <div>
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          isVisible={true}
          animationInDuration={3000}
        >
          <h4 className="cover-heading text-uppercase font-weight-bold">
            PM Detected Chart
          </h4>
          <Canvas station={this.props.pickStation} />
        </Animated>
        <br />
        <div className="row">
          <div className="col-lg-8">
            <div className="dialog info fadeIn animated" id="time">
              <div className="title text-uppercase">Updated on</div>
              <div className="contentDate1">???</div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="dialog success fadeIn animated" id="status">
              <div className="title text-uppercase">Station</div>
              <div className="content">OFFLINE</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="dialog danger fadeIn animated" id="PM10">
              <div className="title text-uppercase">PM 1</div>
              <div className="content">00.0 µm</div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="dialog primary fadeIn animated" id="PM25">
              <div className="title text-uppercase">PM 2.5</div>
              <div className="content">00.0 µm</div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="dialog info fadeIn animated" id="PM100">
              <div className="title text-uppercase">PM 10</div>
              <div className="content">00.0 µm</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Monitor;
