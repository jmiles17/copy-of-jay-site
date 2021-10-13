import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <section id="footer">
                <div className="container-fluid footer-section">
                    <div className="row footer-row">
                        <div className="col-2" id="github">
                            <a href="https://github.com/jmiles17" target="_blank" rel="noreferrer"><span className="footer-icon fab fa-github"></span></a>
                        </div>
                        <div className="col-2" id="linkedin">
                            <a href="https://www.linkedin.com/in/jason-miles-2021/" target="_blank" rel="noreferrer"><span className="footer-icon fab fa-linkedin-in"></span></a>
                        </div>
                        <div className="col-2" id="twitter">
                            <a href="https://twitter.com/01Jay0110" target="_blank" rel="noreferrer"><span className="footer-icon fab fa-twitter"></span></a>
                        </div>
                    </div>
                    <div className="row footer-row">
                        <div>
                            <h5>Jason Miles</h5>
                        </div>
                    </div>
                </div>
            </section>
            
        );
    }
}