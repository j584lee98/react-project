import React from 'react';
import './App.css';
import Nav from './Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class About extends React.Component {
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
      <div className="about-main">
        <Nav />
        <div className="about-content">

          <div className="container py-5">
            <div className="row text-center text-white">
              <div className="col-lg-8 mx-auto">
                <h1 className="display-4">Our Team</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla dui enim, non pellentesque tellus dignissim eget. Integer ut fermentum ex. Sed ut enim justo. Nulla vitae pellentesque ex. Phasellus elit nulla, imperdiet ut ultrices eget, molestie eu orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="row text-center d-flex justify-content-around">
            <div className="horizontal col-xl-3 col-md-6 mb-5">
              <div className="bg-white rounded shadow-sm">
                <div className="picture rounded-top"></div>
                <div className="p-4">
                  <h5 className="mb-0">Member Name</h5><span className="small text-uppercase text-muted">Profession</span>
                  <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a></li>
                    <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
                    <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
                  </ul>
                  <p>Suspendisse efficitur, eros ac congue faucibus, diam arcu eleifend quam, ac sagittis elit lorem eget leo. Nunc mollis ornare condimentum.</p>
                  <hr></hr>
                  <p>Vestibulum luctus dolor elit, faucibus tincidunt erat tempor quis. In condimentum eget eros id bibendum.</p>
                </div>
              </div>
            </div>

            <div className="horizontal col-xl-3 col-md-6 mb-5">
              <div className="bg-white rounded shadow-sm">
                <div className="picture rounded-top"></div>
                <div className="p-4">
                  <h5 className="mb-0">Member Name</h5><span className="small text-uppercase text-muted">Profession</span>
                  <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a></li>
                    <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
                    <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
                  </ul>
                  <p>Suspendisse efficitur, eros ac congue faucibus, diam arcu eleifend quam, ac sagittis elit lorem eget leo. Nunc mollis ornare condimentum.</p>
                  <hr></hr>
                  <p>Vestibulum luctus dolor elit, faucibus tincidunt erat tempor quis. In condimentum eget eros id bibendum.</p>
                </div>
              </div>
            </div>

            <div className="horizontal col-xl-3 col-md-6 mb-5">
              <div className="bg-white rounded shadow-sm">
                <div className="picture rounded-top"></div>
                <div className="p-4">
                  <h5 className="mb-0">Member Name</h5><span className="small text-uppercase text-muted">Profession</span>
                  <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a></li>
                    <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
                    <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
                  </ul>
                  <p>Suspendisse efficitur, eros ac congue faucibus, diam arcu eleifend quam, ac sagittis elit lorem eget leo. Nunc mollis ornare condimentum.</p>
                  <hr></hr>
                  <p>Vestibulum luctus dolor elit, faucibus tincidunt erat tempor quis. In condimentum eget eros id bibendum.</p>
                </div>
              </div>
            </div>

            <div className="horizontal col-xl-3 col-md-6 mb-5">
              <div className="bg-white rounded shadow-sm">
                <div className="picture rounded-top"></div>
                <div className="p-4">
                  <h5 className="mb-0">Member Name</h5><span className="small text-uppercase text-muted">Profession</span>
                  <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a></li>
                    <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
                    <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
                  </ul>
                  <p>Suspendisse efficitur, eros ac congue faucibus, diam arcu eleifend quam, ac sagittis elit lorem eget leo. Nunc mollis ornare condimentum.</p>
                  <hr></hr>
                  <p>Vestibulum luctus dolor elit, faucibus tincidunt erat tempor quis. In condimentum eget eros id bibendum.</p>
                </div>
              </div>
            </div>

            {/* <div className="vertical col-lg-6 mb-5">
            <div className="testing bg-white rounded shadow-sm">
              <div className="picture rounded-left"></div>
              <div className="desc p-4">
                <h5 className="mb-0">Member Name</h5><span className="small text-uppercase text-muted">Profession</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a></li>
                  <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
                  <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
                </ul>
                <p>Suspendisse efficitur, eros ac congue faucibus, diam arcu eleifend quam, ac sagittis elit lorem eget leo. Nunc mollis ornare condimentum.</p>
                <hr></hr>
                <p>Vestibulum luctus dolor elit, faucibus tincidunt erat tempor quis. In condimentum eget eros id bibendum.</p>
              </div>
            </div>
          </div>

          <div className="vertical col-lg-6 mb-5">
            <div className="testing bg-white rounded shadow-sm">
              <div className="picture rounded-left"></div>
              <div className="desc p-4">
                <h5 className="mb-0">Member Name</h5><span className="small text-uppercase text-muted">Profession</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a></li>
                  <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
                  <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
                </ul>
                <p>Suspendisse efficitur, eros ac congue faucibus, diam arcu eleifend quam, ac sagittis elit lorem eget leo. Nunc mollis ornare condimentum.</p>
                <hr></hr>
                <p>Vestibulum luctus dolor elit, faucibus tincidunt erat tempor quis. In condimentum eget eros id bibendum.</p>
              </div>
            </div>
          </div>

          <div className="vertical col-lg-6 mb-5">
            <div className="testing bg-white rounded shadow-sm">
              <div className="picture rounded-left"></div>
              <div className="desc p-4">
                <h5 className="mb-0">Member Name</h5><span className="small text-uppercase text-muted">Profession</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a></li>
                  <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
                  <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
                </ul>
                <p>Suspendisse efficitur, eros ac congue faucibus, diam arcu eleifend quam, ac sagittis elit lorem eget leo. Nunc mollis ornare condimentum.</p>
                <hr></hr>
                <p>Vestibulum luctus dolor elit, faucibus tincidunt erat tempor quis. In condimentum eget eros id bibendum.</p>
              </div>
            </div>
          </div>

          <div className="vertical col-lg-6 mb-5">
            <div className="testing bg-white rounded shadow-sm">
              <div className="picture rounded-left"></div>
              <div className="desc p-4">
                <h5 className="mb-0">Member Name</h5><span className="small text-uppercase text-muted">Profession</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a></li>
                  <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
                  <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
                </ul>
                <p>Suspendisse efficitur, eros ac congue faucibus, diam arcu eleifend quam, ac sagittis elit lorem eget leo. Nunc mollis ornare condimentum.</p>
                <hr></hr>
                <p>Vestibulum luctus dolor elit, faucibus tincidunt erat tempor quis. In condimentum eget eros id bibendum.</p>
              </div>
            </div>
          </div> */}

            {/* <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"></img>
              <h5 className="mb-0">Member Name</h5><span className="small text-uppercase text-muted">Profession</span>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a></li>
                <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
                <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
              </ul>
              <p>Suspendisse efficitur, eros ac congue faucibus, diam arcu eleifend quam, ac sagittis elit lorem eget leo. Nunc mollis ornare condimentum.</p>
            </div>
          </div>

          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"></img>
              <h5 className="mb-0">Member Name</h5><span className="small text-uppercase text-muted">Profession</span>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a></li>
                <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
                <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
              </ul>
              <p>Suspendisse efficitur, eros ac congue faucibus, diam arcu eleifend quam, ac sagittis elit lorem eget leo. Nunc mollis ornare condimentum.</p>
            </div>
          </div>

          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"></img>
              <h5 className="mb-0">Member Name</h5><span className="small text-uppercase text-muted">Profession</span>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a></li>
                <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
                <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
              </ul>
              <p>Suspendisse efficitur, eros ac congue faucibus, diam arcu eleifend quam, ac sagittis elit lorem eget leo. Nunc mollis ornare condimentum.</p>
            </div>
          </div>

          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"></img>
              <h5 className="mb-0">Member Name</h5><span className="small text-uppercase text-muted">Profession</span>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a></li>
                <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
                <li className="list-inline-item"><a href="#" className="linkicon"><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
              </ul>
              <p>Suspendisse efficitur, eros ac congue faucibus, diam arcu eleifend quam, ac sagittis elit lorem eget leo. Nunc mollis ornare condimentum.</p>
            </div>
          </div> */}

          </div>
        </div>
      </div>
    );
  }

}

export default About;
