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
          animationInDuration={1000}
        >
          <div className="row">
            <div className="col-sm-6">
              <Link to="/station1">
                <div className="dialog primary fadeIn animated">
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
        </Animated>

        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          isVisible={true}
          animationInDuration={2000}
        >
          <main role="main" className="inner cover">
            <h1 className="cover-heading text-success">
              PM Detector Real Time Dashboard
            </h1>
            <p className="lead">
              Wireless and Broadband Computer Networks 269430, IOT Application
              Project
            </p>
            <Animated
              animationIn="fadeIn"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={3000}
            >
              <p>
                The development of air monitoring station have 3 main parts that
                include station, database, and website application. <br />
                In this project used microcontroller(ESP32) collect data from
                PM-detector sensor and will be add temperature and humidity
                sensor in the future. Data that collected via ESP32 will sent to
                Firebase that is real-time database. The developed web
                application(ReactJS) used to represent the information of each
                station by retrieved data from Firebase.
              </p>
              <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                isVisible={true}
                animationInDuration={3000}
              >
                <p className="lead">
                  <Link to="/about" className="btn btn-lg btn-secondary">
                    Learn more
                  </Link>
                </p>
              </Animated>
            </Animated>
          </main>
        </Animated>
      </div>
    );
  }
}

export default Home;
