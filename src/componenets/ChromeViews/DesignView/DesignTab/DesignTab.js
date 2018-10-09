import React, { Component } from 'react';
import './DesignTab.css'

class DesignTab extends Component {
  render() {
    return (
      <div className="chromeView">
        <img src="images/DesignView/selfie2.jpg" className="selfiePic col-xs-12 col-sm-6 col-md-6 col-lg-5 col-xl-5 img-thumbnail" alt="me" />

        <div className="card p-1 shadow-sm">
          <div className="p-1 mb-2 rounded  shadow pageTitle bg-dark">Commercial Design
          </div>
          <div>
            <img
              src="/images/DesignView/software/photoshop.svg"
              alt="HTML5" className="designIcon rounded col-2" />

            <img
              src="/images/DesignView/software/illustrator.svg"
              alt="HTML5" className="designIcon rounded col-2" />

            <img
              src="/images/DesignView/software/indesign.svg"
              alt="HTML5" className="designIcon rounded col-2" />

            <img
              src="/images/DesignView/software/premier.svg"
              alt="HTML5" className="designIcon rounded col-2" />

            <img
              src="/images/DesignView/software/experience.svg"
              alt="HTML5" className="designIcon rounded col-2" />

            <img
              src="/images/DesignView/software/illustrator.svg"
              alt="HTML5" className="designIcon rounded col-2" />

          </div>

          <ul className="list-group list-group-flush  shadow-sm mt-2">
            <li className="list-group-item rounded-top list-group-item-dark p-1">
              <i className="fas fa-dot-circle ml-1 mr-2 text-muted"></i>Typograpy & lettering
            </li>
            <li className="list-group-item list-group-item-secondary p-1">
              <i className="fas fa-dot-circle ml-1 mr-2 text-muted"></i>Editorial/Print Collateral
            </li>
            <li className="list-group-item list-group-item-dark p-1">
              <i className="fas fa-dot-circle ml-1 mr-2 text-muted"></i>Illustration & Visual Development
            </li>
            <li className="list-group-item list-group-item-secondary rounded-bottom p-1">
              <i className="fas fa-dot-circle ml-1 mr-2 text-muted"></i>Interactive Media
            </li>
          </ul>

          <div className="card p-1 mt-2 rounded  shadow-sm">
            <div>
              Since 2010 I have been a successful Graphic Designer, working with businesses and organizations across the US.
            </div>
          </div>

          <div className="card p-1 mt-2 rounded  shadow-sm">
            <div>
              My work has been used in a variety of contexts, ranging from non-profit to entertainment.
            </div>
          </div>

          <div className="align-content-center justify-content-between mt-2 rounde designIcon-container shadow border rounded">

            <img
              src="/images/DesignView/tools/notebook.svg"
              alt="HTML5" className="processIcon col-3 rounded" />
            <img
              src="/images/DesignView/tools/camera.svg"
              alt="HTML5" className="processIcon col-3 rounded " />
            <img
              src="/images/DesignView/tools/develop.svg"
              alt="HTML5" className="processIcon col-3 rounded " />
            <img
              src="/images/DesignView/tools/vector.svg"
              alt="HTML5" className="processIcon col-3 rounded " />

          </div>

        </div>

      </div>
    );
  }
}

export default DesignTab;