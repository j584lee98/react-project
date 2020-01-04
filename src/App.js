import React from 'react';
import './App.css';
import About from './About';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Video from './static/night.mp4'
import { Animated } from "react-animated-css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/triangle" component={Triangle} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

class Home extends React.Component {
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
      <div className="home-main">
        <Nav />
        <div className="home-content">
          <div className="background">
            <h1>Home Page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla dui enim, non pellentesque tellus dignissim eget. Integer ut fermentum ex. Sed ut enim justo. Nulla vitae pellentesque ex. Phasellus elit nulla, imperdiet ut ultrices eget, molestie eu orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Animated animationIn="heartBeat" infinite isVisible={true}>
              <div>
                <FontAwesomeIcon className="icon" icon={faAngleDoubleDown} size="4x" onClick={() => document.querySelector('div.box').scrollIntoView({ behavior: 'smooth' })} />
              </div>
            </Animated>
          </div>
          <div className="video-container" style={{ opacity: 1 - this.state.offset / this.state.height }}>
            <video
              autoPlay
              loop
              muted
              height={3840 / this.state.width > 2160 / this.state.height ? '100vh' : null}
              width={3840 / this.state.width <= 2160 / this.state.height ? '100vw' : null}
            >
              <source src={Video} type="video/mp4"></source>
            </video>
          </div>
        </div>
        <div className="box" style={{
          position: 'absolute',
          top: (this.state.height + 100) + 'px',
          left: 0,
        }}><h1>Container</h1></div>
      </div>
    );
  }
}

class Triangle extends React.Component {
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
      <div className="home-main">
        <Nav />
        <div className="home-content">
          <div className="background">
            <h1>Home Page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla dui enim, non pellentesque tellus dignissim eget. Integer ut fermentum ex. Sed ut enim justo. Nulla vitae pellentesque ex. Phasellus elit nulla, imperdiet ut ultrices eget, molestie eu orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Animated animationIn="heartBeat" infinite isVisible={true}>
              <div>
                <FontAwesomeIcon className="icon" icon={faAngleDoubleDown} size="4x" onClick={() => document.querySelector('div.box').scrollIntoView({ behavior: 'smooth' })} />
              </div>
            </Animated>
          </div>
          <div className="video-container">
            <video
              autoPlay
              loop
              muted
              height={3840 / this.state.width > 2160 / this.state.height ? '100vh' : null}
              width={3840 / this.state.width <= 2160 / this.state.height ? '100vw' : null}
            >
              <source src={Video} type="video/mp4"></source>
            </video>
          </div>
        </div>
        <div className="triangle" style={{
          borderLeft: this.state.width / 2 + 'px solid transparent',
          borderRight: this.state.width / 2 + 'px solid transparent',
          borderBottom: '100px solid white',
        }}></div>
        <div className="box" style={{
          position: 'absolute',
          top: (this.state.height + 100) + 'px',
          left: 0,
        }}><h1>Container</h1></div>
      </div>
    );
  }
}

export default App;
