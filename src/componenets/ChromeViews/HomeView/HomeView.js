import React, { Component } from 'react';
import WelcomeTab from './WelcomeTab/WelcomeTab';
import ResumeTab from './ResumeTab/ResumeTab';
import './HomeView.css';

class HomeView extends Component {
  constructor() {
    super();
    this.state = {
      chromeTab: 'welcome',
    }
  }
  setWelcome = () => {
    this.setState({
      chromeTab: 'welcome'
    })
  }
  setResume = () => {
    this.setState({
      chromeTab: 'resume'
    })
  }
  whichToDisplay = () => {
    switch (this.state.chromeTab) {
      case 'welcome':
        return <WelcomeTab />
      case 'resume':
        return <ResumeTab />
      default:
        break;
    }
  }
  render() {
    return (
      <div className="chromeWindow rounded">
        <div className="window-bar bg-inactive rounded-top">
        </div>

        <div className="windowTop d-flex">
          {/* Window Controls */}
          <div className="d-flex bg-inactive pr-2 controlContainer">
            {/* Exit Icon */}
            <div className="bg-danger windowControlsContainer rounded-circle ml-2 align-self-center">
              <i className="fas fa-times windowControlIcon exitIcon"></i>
            </div>
            {/* Minimize Icon */}
            <div className="bg-warning windowControlsContainer rounded-circle align-self-center">
              <i className="fas fa-minus windowControlIcon miniIcon"></i>
            </div>
            {/* Expand Icon */}
            <div className="bg-success windowControlsContainer rounded-circle align-self-center">
              <i className="fas fa-expand windowControlIcon expIcon"></i>
            </div>
          </div>

          {/* Chrome Tab links */}
          <div className="d-flex bg-inactive rounded-top text-dark linkContainer">
            <div className="projectLink-Active mt-1 mr-1 p-1 rounded-top text-dark" onClick={this.setWelcome}>
              <span className="chromeTabLink">
                Welcome
              </span>
            </div>
            <div className="projectLink-Inactive ml-1 mt-1 p-1 text-dark rounded-top text-dark" onClick={this.setResume}>
              <span className="chromeTabLink">
                Resume
              </span>
            </div>
          </div>
        </div>

        {/* URL BAR + Navigation Buttons */}
        <div className="chromeNavBar bg-white d-flex">
          <div className="navigation p2 d-flex mt-1 mb-1">
            <i className="fas fa-arrow-left ml-2 mt-2 mb-1"></i>
            <i className="fas fa-arrow-right ml-2 mt-2 mb-1"></i>
            <i className="fas fa-redo-alt ml-2 mt-2 mb-1"></i>
          </div>
          <div className="urlBar ml-3 mt-2 p-1 pl-2 d-flex">
            <i className="fas fa-lock mr-1 urlLock"></i>
            /home
          </div>
          <div className="urlOptionsContainer ml-2 mr-2 mb-1">
            <i className="fas fa-ellipsis-v chromeOptionsButton"></i>
          </div>
        </div>
        <div className="chromeViewPort rounded-bottom">
          {this.whichToDisplay()}
        </div>
      </div>
    );
  }
}

export default HomeView;