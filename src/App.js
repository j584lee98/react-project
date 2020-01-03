import React from 'react';
import './App.css';
import About from './About';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Video from './static/night.mp4'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <Nav />
      <div className="section">
        <div className="section-text">
          <h1>Home Page</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla dui enim, non pellentesque tellus dignissim eget. Integer ut fermentum ex. Sed ut enim justo. Nulla vitae pellentesque ex. Phasellus elit nulla, imperdiet ut ultrices eget, molestie eu orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="video-container">
          <video autoPlay loop muted width='100%'>
            <source src={Video} type="video/mp4"></source>
          </video>
        </div>
      </div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </div>
  );
}

export default App;
