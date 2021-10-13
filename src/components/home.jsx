import React, { Component } from 'react';
import "animate.css";

export default class Home extends Component {
    render() {
        return (
            <section id="Home">
                <div className="anim_container jumbotron jumbotron-fluid" id="home-jumbotron">
                    <div className="container-fluid anim_element" id="home-header">
                        <h1>Hey, I'm <br /><strong>Jason</strong></h1>
                    </div>
                </div>
            </section>
        );
    }
}


