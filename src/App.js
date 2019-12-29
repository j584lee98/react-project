import React from 'react';
import './App.css';
import About from './About';
import Nav from './Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
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
      <div class="container">
        <div class="row text-center">

          <div class="container home-head py-5">
            <div class="row text-center">
              <div class="col-lg-8 mx-auto">
                <h1 class="display-4">Home Page</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla dui enim, non pellentesque tellus dignissim eget. Integer ut fermentum ex. Sed ut enim justo. Nulla vitae pellentesque ex. Phasellus elit nulla, imperdiet ut ultrices eget, molestie eu orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

          <div class="container home-box my-5">
            <div>

            </div>
          </div>

          <div class="container home-box my-5">
            <div>

            </div>
          </div>

          <div class="container home-box my-5">
            <div>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
