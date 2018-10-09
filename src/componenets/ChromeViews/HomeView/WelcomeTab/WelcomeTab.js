import React, { Component } from 'react';


class WelcomeTab extends Component {
  render() {
    return (
      <div className="chromeView">
        <img src="images/HomeView/me.jpg" className="img-thumbnail selfiePic col-xs-12 col-sm-6 col-md-6 col-lg-5 col-xl-5" alt="me" />

        <div className="card p-1 shadow-sm">
          <div className="p-1 rounded-top  shadow pageTitle bg-dark">
            Jakeh Clark, M.F.A
          </div>
          <div className="p-1 mb-1 rounded-bottom  shadow pageTitle bg-secondary"> <span className="subTitle">Developer / Designer</span>
          </div>

          <ul className="list-group list-group-flush  shadow-sm">
            <li className="list-group-item rounded-top list-group-item-dark p-1">
              <i className="fas fa-dot-circle ml-1 mr-2 text-muted"></i>Full-Stack Development
            </li>
            <li className="list-group-item list-group-item-secondary p-1">
              <i className="fas fa-dot-circle ml-1 mr-2 text-muted"></i>Interactive Media
            </li>
            <li className="list-group-item list-group-item-dark p-1">
              <i className="fas fa-dot-circle ml-1 mr-2 text-muted"></i>UI & UX Design
            </li>
            <li className="list-group-item list-group-item-secondary rounded-bottom p-1">
              <i className="fas fa-dot-circle ml-1 mr-2 text-muted"></i>Illustration
            </li>
          </ul>

          <div className="card p-1 mt-2 rounded  shadow-sm">
            <div className="d-flex justify-content-center mt-1 mb-2">
              <form action="https://www.linkedin.com/in/jakehclark/" target="_blank">
                <input className="btn btn-primary shadow-sm" type="submit" value="LinkedIn" />
              </form>
              <span className="ml-1 mr-1"> </span>
              <form action="https://github.com/Maelstrm">
                <input className="btn btn-success  shadow-sm" type="submit" value="Github" />
              </form>
            </div>
            <span>
              After recieving my MFA degree from <b>The Academy of Arts</b>, I went back to school to learn <b>Software-Engineering</b>.
          </span>
          </div>
          <div className="card p-1 mt-2 rounded  shadow-sm">
            <span>
              I enjoy making thing, and love being part of the <b>end-to-end lifecycle</b> of digital products and services.
          </span>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomeTab;