import React, { Component } from 'react';

class ContactTab extends Component {
  render() {
    return (
      <div className="chromeView">

        <div className="contactIconContainer">
          <div className="d-flex justify-content-center">
            <div className="card pl-2 pr-2 mb-2 shadow-sm">
              <a className="mailto" href="mailto:hello@jclarkworks.com">
                <i className="fas fa-envelope-square connectIcons connectEmail"></i>
              </a>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div className="card pl-2 pr-2 mb-2 shadow-sm">
              <a href="https://twitter.com/jakehclark?lang=en" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter-square connectIcons connectTwitter"></i>
              </a>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div className="card pl-2 pr-2 mb-2 shadow-sm">
              <a href="https://www.linkedin.com/in/jakehclark/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin connectIcons connectLinkedIn"></i>
              </a>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div className="card pl-2 pr-2 mb-2 shadow-sm">
              <a href="http://mael-strm.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tumblr-square connectIcons connectTumblr"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactTab;