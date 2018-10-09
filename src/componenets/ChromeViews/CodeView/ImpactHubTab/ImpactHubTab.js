import React, { Component } from 'react';

class ImpactHubTab extends Component {
  render() {
    return (
      <div className="chromeView">
        <div className="card p-2 shadow">

          <div><img src="./images/CodeView/ImpactHubTab/l1.jpg" className="img-thumbnail float-left col-12" /></div>

          <div>
            <div><img src="./images/CodeView/ImpactHubTab/01.jpg" className="img-thumbnail float-left col-12" /></div>

            <div className="border contentContainer shadow-sm roundedp-2 mb-2 p-2">
              <img src="./images/CodeView/ImpactHubTab/l2.jpg" className="float-left mt-2 col-6" />
              <p>
                Currently I am working with a team to develope an application for Impact Hub, Minneapolis.
              </p>
              <p>
                Impact Hub is a global organizat with over 100 locations. They are a co-working space that focuses on serving "mission-based" organizations and businesses.
              </p>
              <p>
                The application we are developing will use the <b>Cobot</b> api, allowing members to check-in and out as they use the space.
              </p>
              <p>
                Our software will also allow the organization to keep track of visitors and provide valuable data visualization.
              </p>
            </div>
          </div>

          <div>
            <div className="border contentContainer shadow-sm roundedp-2 p-2 bg-dark rounded">
              <div className="text-muted">
                Sample wireframe and user-flow chart
            </div>
              <img src="./images/CodeView/ImpactHubTab/p1.png" className="img-thumbnail float-right col-md-12 bg-dark" />
            </div>
          </div>

          <div>
            <div className="border contentContainer p-2 rounded">
              <img src="./images/CodeView/ImpactHubTab/p2.png" className="img-thumbnail float-right col-md-12 bg-dark" />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default ImpactHubTab;