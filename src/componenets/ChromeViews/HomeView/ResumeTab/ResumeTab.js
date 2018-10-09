import React, { Component } from 'react';
import AllExperience from './ResumeItems/ExperienceItems/AllExperience';

class ResumeTab extends Component {
  render() {
    return (
      <div className="chromeView">
          <AllExperience />

          <img src="images/HomeView/me-2.jpg" className="img-thumbnail selfiePic-2 col-12 col-md-4 col-lg-4 col-xl-4" alt="me" />

      </div>
    );
  }
}

export default ResumeTab;