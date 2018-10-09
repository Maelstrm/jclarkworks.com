import React, { Component } from 'react';
import Footer from '../Persistent/Footer';
import Header from '../Persistent/Header';
import HomeView from '../ChromeViews/HomeView/HomeView';
import CodeView from '../ChromeViews/CodeView/CodeView';
import ContactView from '../ChromeViews/ContactView/ContactView';
import DesignView from '../ChromeViews/DesignView/DesignView';
import './IndexPage.css';

class HomePage extends Component {

  constructor() {
    super();
    this.state = {
      currentView: 'home',
    }
  }

  setCode = () => {this.setState({currentView: 'code'})}
  setContact = () => {this.setState({currentView: 'contact'})}
  setDesign = () => {this.setState({currentView: 'design'})}
  setHome = () => {this.setState({currentView: 'home'})}

  whichToDisplay = () => {
    switch (this.state.currentView) {
      case 'code':
      return <CodeView />
      case 'contact':
      return <ContactView />
      case 'design':
      return <DesignView />
      case 'home':
      return <HomeView />
      default:
      return <HomeView />
    }
  }

  render() {
    return (
      <div className="container">
        <Header />

        {/* Contents */}
        <div className="row mt-3 mb-5 d-flex justify-content-between desktop">

          {/* Chrome Container */}
          <div className="container col-9 justify-content-start">
            {this.whichToDisplay()}
          </div>

          {/* Folder Container */}
          <div className="container col-3
          justify-content-end">
            <div className="folderLinksContainer column mr-2">
              {/* Home Link */}
              <div className="folderLink d-flex align-items-end flex-column" onClick={this.setHome}>
                <div className="folders-1 IconHover">
                  <div className="foldertext">
                    <i className="fas fa-home"></i>
                  </div>
                </div>
              </div>

              <div className="folderLink d-flex align-items-end flex-column extraLinks">
                <div className="">
                  {/* Design Link */}
                  <div className="folderLink d-flex align-items-end flex-column mt-2" onClick={this.setDesign}>
                    <div className="folders-des">
                    </div>
                  </div>
                 {/* Development Link */}
                  <div className="folderLink d-flex align-items-end flex-column mt-3 mb-2" onClick={this.setCode}>
                    <div className="folders-dev">
                    </div>
                  </div>
                </div>
              </div>
              {/* Contact Link */}
              <div className="folderLink d-flex align-items-end flex-column mt-3" onClick={this.setContact}>
                <div className="folders-2 IconHover">
                  <div className="foldertext">
                    <i className="fas fa-envelope"></i>
                  </div>
                </div>
              </div>

            </div>


          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default HomePage;