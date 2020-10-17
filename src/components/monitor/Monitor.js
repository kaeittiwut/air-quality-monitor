import React, { Component } from 'react';

class Monitor extends Component {
  render() {
    return (
      <div>
        <div className="dialog info fadeIn animated">
          <div className="title1">This is station 1</div>
        </div>
        <div
          id="chartContainer"
          style={{ height: '370px', width: '50%' }}
        ></div>
        <div className="dialog info fadeIn animated" id="time">
          <div className="contentDate1">???</div>
          <div className="title">Date</div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="dialog primary fadeIn animated" id="PM25">
              <div className="content">00.0 µm</div>
              <div className="title">PM 2.5</div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="dialog info fadeIn animated" id="PM100">
              <div className="content">00.0 µm</div>
              <div className="title">PM 10</div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="dialog success fadeIn animated" id="status">
              <div className="content">???</div>
              <div className="title">Status of station</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Monitor;
