import React, { Component } from 'react';

export default class Projects extends Component {
    render() {
        return (
            <section className="site-section" id="Projects">
                <div className="container-fluid" >
                    <div className="row section-header anim_header">
                        <h2>Projects</h2>
                    </div>
                    <div className="row section-elements">
                        <div className="col-md section-element" id="lights">
                            <div className="element-header anim_element" id="lights-header">
                                <h3>Responsive Lights</h3>
                            </div>
                            <div className="anim_element">
                                <iframe className="lights-vid" title="lights-title" alt="lights video youtube" src="https://www.youtube.com/embed/gkB1dCYf1ak" height="400" width="500" frameBorder="0"></iframe>
                            </div>
                            <div className="anim_element">
                                <p>I recently <a href="https://github.com/jmiles17/lights" target="_blank" rel="noreferrer">programmed </a> 
                                 a string of lights to respond to audio frequencies.  This was an exciting project where I got my hands dirty with some hardware and a sodering iron.</p>
                            </div>
                        </div>
                        <div className="col-md section-element" id="trading-bot">
                            <div className="element-header anim_element">
                                <h3>Trading bot coming soon..</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        );
    }
}