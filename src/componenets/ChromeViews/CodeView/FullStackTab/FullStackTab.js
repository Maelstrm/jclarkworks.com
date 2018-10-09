import React, { Component } from 'react';
import './FullStackTab.css'

class FullStackTab extends Component {
  render() {
    return (
      <div className="chromeView">
        <img src="images/CodeView/selfie.jpeg" className="selfiePic col-xs-12 col-sm-6 col-md-6 col-lg-5 col-xl-5 img-thumbnail" alt="me" />

        <div className="card p-1 shadow-sm">
          <div className="p-1 mb-2 rounded  shadow pageTitle bg-dark">Full-Stack Development
          </div>

          <ul className="list-group list-group-flush  shadow-sm mt-2">
            <li className="list-group-item rounded-top list-group-item-dark p-1">
              <i className="fas fa-dot-circle ml-1 mr-2 text-muted"></i>React - Angular - jQuery
            </li>
            <li className="list-group-item list-group-item-secondary p-1">
              <i className="fas fa-dot-circle ml-1 mr-2 text-muted"></i>User Experience & Interface Design
            </li>
            <li className="list-group-item list-group-item-dark p-1">
              <i className="fas fa-dot-circle ml-1 mr-2 text-muted"></i>Server Architecture w/ Node.js
            </li>
            <li className="list-group-item list-group-item-secondary p-1 rounded-bottom">
              <i className="fas fa-dot-circle ml-1 mr-2 text-muted"></i>MongoDB & PostgreSQL Database
            </li>
          </ul>

          <div className="card p-1 mt-2 rounded  shadow-sm">
            <div>
              I began programming in middleschool at the age of 13 and have explored a lot of territory in the past 10+ years. I love working with web technology because I believe the web is the future. I'm super excited about Cloud Technology, IoT, and Creative Coding!
            </div>
          </div>

          <div className="card p-1 mt-2 rounded  shadow-sm">
            <div>
              I develop software with a trained eye for User Experience. I believedesign and software engineering both require a great deal of empathy and keeping the end-user in mind.
            </div>
          </div>

          <div className="align-content-center justify-content-between mt-2 rounde designIcon-container shadow border rounded">

              <img
                src="/images/CodeView/tools/learning.svg"
                alt="HTML5" className="processIcon col-3 rounded" />
              <img
                src="/images/CodeView/tools/mobile-app.svg"
                alt="HTML5" className="processIcon col-3 rounded " />
              <img
                src="/images/CodeView/tools/web.svg"
                alt="HTML5" className="processIcon col-3 rounded " />
              <img
                src="/images/CodeView/tools/cloud-computing.svg"
                alt="HTML5" className="processIcon col-3 rounded " />

          </div>

        </div>

      </div>
    );
  }
}

export default FullStackTab;