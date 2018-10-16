import React, { Component } from 'react';

class PlayNYCTab extends Component {
  render() {
    return (
      <div className="chromeView">
        <div className="card p-2 shadow">

          <div>
            <img alt="PlayNYC logo" src="./images/DesignView/PlayNYCTab/logo.png" className="p-2 pr-3 float-left col-sm-12 col-md-12 col-lg-6 col-xl-6 img-thumbnail mr-2" />
            <div className="border contentContainer card shadow-sm rounded mb-2 p-2 pl-3">
              <p>
                PlayNYC is a conference for videogame developers and enthusiests. I worked on this project under the direction of <b>James Sisti</b>, founder of Sidekar Interactive.
              </p>
              <p>
                This project was endorsed by <b>Playcrafting</b>, an organization that connects developers to with resources and networking opportunities.
              </p>
              <p>
                On this project I worked with a UX designer to develop the logo for the conference. My experience with <b>Typography</b> and <b>Hand-Lettering</b> was instrumental in helping the organization create a brand identity.
              </p>
            </div>
          </div>

          <div>
            <div className="border contentContainer shadow-sm roundedp-2 p-2 bg-dark rounded">
              <div className="text-muted">
                Final designs rendered by James Sisti, SideKar Interactive
            </div>
              <img alt="Branding" src="./images/DesignView/PlayNYCTab/01.png" className="img-thumbnail float-right col-md-6" />
              <img alt="Branding" src="./images/DesignView/PlayNYCTab/02.png" className="img-thumbnail float-left col-md-5" />
            </div>
          </div>
          <div>
            <div className="border contentContainer shadow-sm roundedp-2 p-2 mt-2 mb-2">
              <p>
                My role in this project consisted of <b>ideation</b> and <b>rapid-visualization</b> based on direction from the oganization's leadership.
                </p>
            </div>
          </div>

          <div>
            <div className="border contentContainer shadow-sm roundedp-2 p-2 bg-dark rounded">
              <div className="text-muted">
                Process Shots
            </div>
              <div className="col">
                <img alt="Branding" src="./images/DesignView/PlayNYCTab/p1.png" className="img-thumbnail float-right col-md-12" />
                <img alt="Branding" src="./images/DesignView/PlayNYCTab/p3.png" className="img-thumbnail float-right col-md-12" />
              </div>
              <div className="col">
                <img alt="Branding" src="./images/DesignView/PlayNYCTab/p4.png" className="img-thumbnail float-right col-md-12" />
                <img alt="Branding" src="./images/DesignView/PlayNYCTab/p2.png" className="img-thumbnail float-right col-md-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayNYCTab;