import React, { Component } from 'react';

class AID extends Component {
    render() {
        return (
            <div className="card p-1 mb-1 bg-inactive">
                <div className="card subItem1-alt text-light sectionHeader p-1 rounded">
                    Art Institute of Dallas
                </div>

                <div className="card text-dark mt-1 p-1 rounded subItem2">
                    <div className="sectionSubHeader">
                        BFA - Graphic Design
                    </div>
                    <div className="resumeCityDate">
                        <div>
                            Dallas, TX
                        </div>
                        <div>
                            May 2009 - May 2010
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AID;