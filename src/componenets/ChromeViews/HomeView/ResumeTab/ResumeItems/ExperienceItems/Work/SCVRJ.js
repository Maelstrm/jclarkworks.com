import React, { Component } from 'react';

class SCVRJ extends Component {
    render() {
        return (
            <div className="card p-1 mb-1 bg-inactive">
                <div className="card subItem1 text-light sectionHeader p-1 rounded">
                    St. Croix Valley Restorative Justice
              </div>

                <div className="card text-dark mt-1 p-1 rounded subItem2">
                    <div className="sectionSubHeader">
                        Diversion Facilitator
                </div>
                    <div className="resumeCityDate">
                        <div>
                            River Falls, WI
                </div>
                        <div>
                           July 2018 - Present
                </div>
                    </div>
                </div>

                <div className="card text-dark mt-1 p-1 rounded subItem2">
                    <div className="sectionSubHeader">
                        Restorative Justice Coordinator
                </div>
                    <div className="resumeCityDate">
                        <div>
                            River Falls, WI
                </div>
                        <div>
                           August 2017 - July 2018
                </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SCVRJ;