import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="bg-dark fixed-bottom toolbar-bg pl-2 pr-2 rounded-top col-centered">

        {/* <div className="bg-dark fixed-bottom toolbar-bg ml-2 mr-2 rounded-top col-centered">
        </div> */}

        <div className="fixed-bottom ml-3 mr-3 toolbar-outer">

          <div className="toolbar-container d-flex align-items-end toolbar-container align-items-center justify-content-center">
          

            <div className="toolbarIconContainer" title="HTML5">
              <img
                src="/images/frameworks/html5-original.svg"
                alt="HTML5" className="toolbarIcon" />
            </div>

            <div className="toolbarIconContainer" title="CSS3">
              <img
                src="/images/frameworks/css3-original.svg"
                alt="CSS3" className="toolbarIcon" />
            </div>

            <div className="toolbarIconContainer" title="JavaScript">
              <img
                src="/images/frameworks/javascript-original.svg"
                alt="JavaScript" className="toolbarIcon" />
            </div>

            <div className="toolbarIconContainer" title="Python">
              <img
                src="/images/frameworks/python-original.svg"
                alt="Python" className="toolbarIcon" />
            </div>

            <div className="toolbarIconContainer" title="React">
              <img
                src="/images/frameworks/react-original.svg"
                alt="React" className="toolbarIcon" />
            </div>

            <div className="toolbarIconContainer" title="Angular">
              <img
                src="/images/frameworks/angularjs-original.svg"
                alt="AngularJs" className="toolbarIcon" />
            </div>

            <div className="toolbarIconContainer" title="WordPress">
              <img
                src="/images/frameworks/wordpress-plain.svg"
                alt="WordPress" className="toolbarIcon" />
            </div>

            <div className="toolbarIconContainer" title="Webpack">
              <img
                src="/images/frameworks/webpack-original.svg"
                alt="Webpack" className="toolbarIcon" />
            </div>

            <div className="toolbarIconContainer" title="jQuery">
              <img
                src="/images/frameworks/jquery-plain-wordmark.svg"
                alt="jQuery" className="toolbarIcon" />
            </div>

            <div className="toolbarIconContainer" title="Node.js">
              <img
                src="/images/frameworks/nodejs-original.svg"
                alt="Node.js" className="toolbarIcon" />
            </div>

            <div className="toolbarIconContainer" title="PostGreSQL">
              <img
                src="/images/frameworks/postgresql-original.svg"
                alt="PostgreSQL" className="toolbarIcon" />
            </div>

            <div className="toolbarIconContainer" title="MongoDB">
              <img
                src="/images/frameworks/mongodb-original.svg"
                alt="MongoDb" className="toolbarIcon" />
            </div>

            <div className="toolbarIconContainer" title="Heroku">
              <img
                src="/images/frameworks/heroku-plain.svg"
                alt="Heroku" className="toolbarIcon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;