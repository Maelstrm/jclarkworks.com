import React, { Component } from 'react';

class Prime extends Component {
    render() {
        return (
            <div className="card p-1 mb-1 bg-inactive">
                <div className="card subItem1-alt text-light sectionHeader p-1 rounded">
                    Prime Digital Academy
                </div>

                <div className="card text-dark mt-1 p-1 rounded subItem2">
                    <div className="sectionSubHeader">
                        Full Stack Software Development Certification
                    </div>
                    <div className="resumeCityDate">
                        <div>
                            Minneapolis, MN
                        </div>
                        <div>
                            October 2018
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Prime;