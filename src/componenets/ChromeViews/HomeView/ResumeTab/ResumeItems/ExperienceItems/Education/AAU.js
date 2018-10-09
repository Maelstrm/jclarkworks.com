import React, { Component } from 'react';

class AAU extends Component {
    render() {
        return (
            <div className="card p-1 mb-1 bg-inactive">
                <div className="card subItem1-alt text-light sectionHeader p-1 rounded">
                    Academy of Art University
                </div>

                <div className="card text-dark mt-1 p-1 rounded subItem2">
                    <div className="sectionSubHeader">
                        M.F.A. - Illustration
                    </div>
                    <div className="resumeCityDate">
                        <div>
                            San Francisco, CA
                        </div>
                        <div>
                            May 2017
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AAU;