import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class AboutNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 0,
      width: 0
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        height: window.innerHeight,
        width: document.body.offsetWidth,
        offset: window.pageYOffset
      });
    }, 50);
  }

  render() {
    return (
      <div id="navbar" style={{ backgroundColor: 'rgba(33, 37, 41, 1)' }}>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="/">Kader Capital Partners</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/triangle">Triangle</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/about">About</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }

}

export default AboutNav;
