import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Station1 from './containers/stations/Station1';
import Station2 from './containers/stations/Station2';
import NotFound from './containers/error/NotFound';

class App extends Component {
  renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/station1" component={Station1} />
        <Route exact path="/station2" component={Station2} />
        <Route component={NotFound} />
      </Switch>
    );
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="text-center">
            <div className="cover-container p-3 mx-auto flex-column">
              <Header />
              {this.renderRouter()}
              <Footer
                company="Developed with Mind"
                email="contact@devwithmind.com"
              />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
