import React, { Component } from 'react';

class Toroidal extends Component {
    render() {
        return (
            <div className="card p-1 mb-1 bg-inactive">
            <div className="card subItem1 text-light sectionHeader p-1 rounded">
                Toroidal Studios
          </div>

            <div className="card text-dark mt-1 p-1 rounded subItem2">
                <div className="sectionSubHeader">
                    Designer & Story Consultant
            </div>
                <div className="resumeCityDate">
                    <div>
                        Minneapolis, MN
            </div>
                    <div>
                        November 2015 - July Present
            </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Toroidal;