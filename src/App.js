import React from 'react';
import './App.css';
import About from './About';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Video from './static/night.mp4'
import Image1 from './static/image1.jpg'
import Image2 from './static/image2.jpg'
import Image3 from './static/image3.jpg'
import Image4 from './static/image4.jpg'
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

function isInView(element) {
  let elementBox = element.getBoundingClientRect()
  let distanceFromTop = 0

  if (elementBox.top - window.innerHeight < distanceFromTop) {
    return true
  }
  else {
    return false
  }
}

function scanDocument() {
  let sectionList = document.querySelectorAll('.top')
  let leftList = document.querySelectorAll('.left')
  let rightList = document.querySelectorAll('.right')
  sectionList.forEach(function (section) {
    if (isInView(section)) {
      section.classList.add('show-top')
    }
    else {
      section.classList.remove('show-top')
    }
  })
  leftList.forEach(function (section) {
    if (isInView(section)) {
      section.classList.add('show-left')
    }
    else {
      section.classList.remove('show-left')
    }
  })
  rightList.forEach(function (section) {
    if (isInView(section)) {
      section.classList.add('show-right')
    }
    else {
      section.classList.remove('show-right')
    }
  })
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
    document.addEventListener('scroll', scanDocument)
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
              height={2560 / this.state.width > 1440 / this.state.height ? '100vh' : null}
              width={2560 / this.state.width <= 1440 / this.state.height ? '100vw' : null}
            >
              <source src="https://vod-progressive.akamaized.net/exp=1579080588~acl=%2A%2F1594271631.mp4%2A~hmac=c4df95e0c985d2c31550109bc78927a0999872761716530313f843c2f417913a/vimeo-prod-skyfire-std-us/01/1094/15/380473720/1594271631.mp4" type="video/mp4"></source>
            </video>
          </div>
        </div>
        <div className="box first">
          <div className="content">
            <h4 className="top mb-4">Donec condimentum vitae ligula id consectetur.</h4>
            <div className="images d-flex flex-wrap justify-content-around">
              <img className="left mx-auto rounded" src={Image1} height="200px" width="200px"></img>
              <img className="right mx-auto rounded" src={Image2} height="200px" width="200px"></img>
            </div>
          </div>
        </div>
        <div className="box second">
          <div className="content">
            <h4 className="top mb-4">Ut fermentum non ante sit amet tincidunt.</h4>
            <div className="images d-flex flex-wrap justify-content-around">
              <img className="left mx-auto rounded" src={Image3} height="200px" width="200px"></img>
              <img className="right mx-auto rounded" src={Image4} height="200px" width="200px"></img>
            </div>
          </div>
        </div>
        <div className="footer">

        </div>
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
