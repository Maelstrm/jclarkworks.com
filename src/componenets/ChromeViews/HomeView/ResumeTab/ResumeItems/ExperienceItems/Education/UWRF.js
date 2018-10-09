import React, { Component } from 'react';

class UWRF extends Component {
    render() {
        return (
            <div className="card p-1 mb-1 bg-inactive">
                <div className="card subItem1-alt text-light sectionHeader p-1 rounded">
                    University of Wisconsin - River Falls
                </div>

                <div className="card text-dark mt-1 p-1 rounded subItem2">
                    <div className="sectionSubHeader">
                        B.S. - Broad Area Art
                    </div>
                    <div className="resumeCityDate">
                        <div>
                            River Falls, WI
                        </div>
                        <div>
                            May 2013
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UWRF;