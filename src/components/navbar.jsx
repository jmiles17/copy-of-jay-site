import React, {Component} from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark fixed-top" id="site-navbar">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navToggle" aria-controls="navToggle" aria-expanded="false" aria-label="Toggle navigation" id="navbar-button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navToggle">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link custom-link" href="#Home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link custom-link" href="#Experience">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link custom-link" href="#Projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link custom-link" href="#About">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}