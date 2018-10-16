import React, { Component } from 'react';
import './Persistent.css';
import Time from './Time'

class Header extends Component {



    render() {
        return (
            <div className="fixed-top bg-dark text-light d-flex justify-content-between Header-Text top-bar">
                <span className="justify-contents-start col-5 d-flex">
                    <span className="mr-3">
                        <i className="fab fa-apple"></i>
                    </span>
                    <span className="mr-3 toolbarLinkShake">
                        <a href="https://github.com/Maelstrm" target="blank">
                        GitHub
                        </a>
                        
                    </span>
                    <span className="toolbarLinkShake2">
                    <a href="https://www.linkedin.com/in/jakehclark/" target="blank">
                        LinkedIn
                        </a>
                    </span>
                </span>

                <span className="justify-contents-end d-flex">
                    <span className="ml-1">
                        <i className="fas fa-wifi"></i>
                    </span>
                    <span className="">
                        <i className="fas ml-2 fa-battery-half"></i>
                    </span>
                    <span className="ml-2 mr-2">
                        <Time />
                    </span>
                    <span className="mr-2">
                        <i className="fas fa-search"></i>
                    </span>
                    <span className="mr-2">
                        <i className="fas fa-list"></i>
                    </span>
                </span>


            </div>
        );
    }
}

export default Header;