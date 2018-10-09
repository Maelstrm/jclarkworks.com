import React, { Component } from 'react';

class Mater extends Component {
    render() {
        return (
            <div className="card p-1 mb-1 bg-inactive">
                <div className="card subItem1 text-light sectionHeader p-1 rounded">
                    Mater Development
              </div>

                <div className="card text-dark mt-1 p-1 rounded subItem2">
                    <div className="sectionSubHeader">
                        Principle Designer
                </div>
                    <div className="resumeCityDate">
                        <div>
                            Minneapolis, MN
                </div>
                        <div>
                            August 2010 - July 2018
                </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mater;