import React, { Component } from 'react';
import "animate.css";

export default class Message extends Component {
    render() {
        return (
            <section id="Message">
                <div className="container site-message">
                    <div className="row anim_element">
                    <p>
                        I pride myself on being an adaptable problem solver who seeks conceptual understanding from broad perspectives.  
                        I aspire to use my talents to build a beneficial and sustainable future.</p>
                    </div>
                    <div className="row anim_element">
                    <p>
                        I graduated from the University of Notre Dame with a degree in Computer Science as well as a minor in Philosophy, 
                        and I am most excited about the promise of blockchain and artificial intelligence.
                    </p>
                    </div>
                    <div className="row anim_element">
                        <button id="download-button">
                            <a href="../docs/Jason_Miles_Resume.pdf" download="Jason_Miles_Resume.pdf">
                                Download Resume  
                                <i className="material-icons">file_download</i>
                            </a>
                        </button>
                    </div>
                </div>
            </section>
        )
    }
}


