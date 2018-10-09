import React, { Component } from 'react';
import Prime from './Education/Prime';
import AAU from './Education/AAU';
import UWRF from './Education/UWRF';
import AID from './Education/AID'
import SCVRJ from './Work/SCVRJ';
import Mater from './Work/Mater';
import Toroidal from './Work/Toroidal';

class AllExperience extends Component {
  render() {
    return (
      <div className="allExperience-1 col-12 col-md-7 col-lg-7 col-xl-7 pl-0 pr-0">
        <div className="card p-1 shadow-sm">
          <div className="p-1 mb-1 rounded pageTitle bg-dark">
            Jakeh Clark, <span className="subTitle">M.F.A</span>
          </div>

          <div className="resumeHeader card p-1 mb-2">
            <div className="card text-light pageHeader p-1 mb-1 itemCardTitle">
              Professional Experience
          </div>
            <div className="ml-4 itemCard1">
              <SCVRJ />
              <Toroidal />
              <Mater />
            </div>
          </div>

          <div className="resumeHeader card p-1">
            <div className="card text-light pageHeader p-1 mb-1 itemCardTitle-alt">
              Education
          </div>
            <div className="ml-4 itemCard1">
              <Prime />
              <AAU />
              <UWRF />
              <AID />
            </div>
          </div>
        </div>
      </div>
        
    );
  }
}

export default AllExperience;