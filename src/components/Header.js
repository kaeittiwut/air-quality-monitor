import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Moment from 'react-moment';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: moment().format('YYYY-MM-DD hh:mm:ss') };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick());
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: moment().format('YYYY-MM-DD hh:mm:ss') });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="masthead mb-auto">
          <div className="row">
            <div className="col text-left">
              <Link to="/">
                <h2 className="text-left">
                  Air quality monitoring
                  <br />
                  <small className="text-secondary">Real Time Dashboard</small>
                </h2>
              </Link>
            </div>
            <div className="col text-right">
              <h4 className="text-muted mt-4">
                <Moment local>{this.state.date}</Moment>
              </h4>
            </div>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default Header;
