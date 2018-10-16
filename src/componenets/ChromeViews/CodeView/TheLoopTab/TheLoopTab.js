import React, { Component } from 'react';
import './TheLoopTab.css'
class TheLoopTab extends Component {
  render() {
    return (
      <div className="chromeView">
        <div className="card p-2 shadow">
          <div className="p-1 mb-2 pageTitle bg-info text-right">
            <span className="text-warning">..get in
            </span>
            <span className=" mr-5 text-warning myLogo">The L∞p
            </span>
          </div>

          <div><img alt="TheLoop" src="./images/CodeView/TheLoopTab/c1.jpg" className="img-thumbnail float-left col-12" /></div>

          <div>
            <div className="border contentContainer shadow-sm roundedp-2 mb-2 p-2 row">
              <div className="col-sm-10 col-12 col-md-6 col-lg-6 col-xl-6">
                <p>
                  <b>The Loop</b> is a career building application for requesting, giving, and managing professional letters of recommendation.
              </p>
                <p>
                  The purpose of this application is to help people build credibility as they navigate through their professional life.
              </p>
              <p>
                  This project is still under development, and is scheduled for public release this winter.
              </p>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6">
              <h6>
                Technologies:
              </h6>
                <ul className="list-group list-group-flush  shadow-sm">
                  <li className="list-group-item list-group-item-secondary rounded-bottom p-1">
                    <i className="fas fa-dot-circle ml-1 mr-2 text-muted"></i>HTML / CSS / JavaScript
                </li>
                  <li className="list-group-item rounded-top list-group-item-dark p-1">
                    <i className="fas fa-dot-circle ml-1 mr-2 text-muted"></i>React.js
            </li>
                  <li className="list-group-item list-group-item-secondary p-1">
                    <i className="fas fa-dot-circle ml-1 mr-2 text-muted"></i>Redux/Sagas
            </li>
                  <li className="list-group-item list-group-item-dark p-1">
                    <i className="fas fa-dot-circle ml-1 mr-2 text-muted"></i>Passport
            </li>
                  <li className="list-group-item list-group-item-secondary rounded-bottom p-1">
                    <i className="fas fa-dot-circle ml-1 mr-2 text-muted"></i>PostgreSQL
                </li>
                  <li className="list-group-item list-group-item-secondary rounded-bottom p-1">
                    <i className="fas fa-dot-circle ml-1 mr-2 text-muted"></i>Node.js
                </li>
                </ul>
              </div>


            </div>
          </div>

          <div>
            <div className="border contentContainer shadow-sm roundedp-2 p-2 bg-dark rounded">
              <div className="text-muted">
                Sample Screenshots
            </div>
              <img alt="TheLoop" src="./images/CodeView/TheLoopTab/02.png" className="img-thumbnail float-left p-3 col-6 col-sm-6" />
              <img alt="TheLoop" src="./images/CodeView/TheLoopTab/01.png" className="img-thumbnail float-left p-3 col-6 col-sm-6" />
            </div>
          </div>
          <div>
            <div className="border contentContainer shadow-sm roundedp-2 p-2 bg-dark rounded">
              <div className="text-muted">
                Sample Wireframes
            </div>
              <img alt="TheLoop" src="./images/CodeView/TheLoopTab/04.png" className="img-thumbnail float-left col-6 col-sm-6" />
              <img alt="TheLoop" src="./images/CodeView/TheLoopTab/05.png" className="img-thumbnail float-left col-6 col-sm-6" />
            </div>
          </div>
          <div>
            <div className="border contentContainer shadow-sm roundedp-2 p-2 mt-2 mb-2">

              In the creation of this application I made a complete mockup of the functionality. I also created a comprehensive scope-document that outlines the project details.
            </div>
          </div>

          <div>
            <div className="border contentContainer shadow-sm roundedp-2 p-2 bg-dark rounded">
              <div className="text-muted">
                In-progress shots
            </div>
              <img alt="TheLoop" src="./images/CodeView/TheLoopTab/p1.jpg" className="img-thumbnail float-left col-md-6" />
              <img alt="TheLoop" src="./images/CodeView/TheLoopTab/p2.jpg" className="img-thumbnail float-left col-md-6" />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default TheLoopTab;