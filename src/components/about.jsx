import React, {Component} from 'react';
import "animate.css";
import Contact from './contact';

export default class About extends Component {
    render() {
        return (
            <section className="site-section" id="About">
                <div className="container-fluid">
                    <div className="row section-header anim_header">
                        <h2>About</h2>
                    </div>
                    <div className="row section-elements">
                        <div className="container-fluid anim_element element-header" id="learning">
                            <h3>What I'm Learning</h3>
                        </div>
                        <div className="col-md section-element" id="podcasts">
                            <div className="row">
                                <div className="col anim_element">
                                    <iframe className="podcast-vid" title="lex-micali" src="https://www.youtube.com/embed/zNdhgOk4-fE" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                <div className="col anim_element">
                                    <iframe className="podcast-vid" title="lex-nazarov" src="https://www.youtube.com/embed/TPXTmVdlyoc" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                <div className="anim_element">
                                    <p>Getting a grasp on advances in blockchain technology such as 
                                    proof of stake and oracle networks</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md section-element" id="books">
                            <div className="row">
                                <div className="col anim_element">
                                    <div className="book">
                                        <a href="https://www.ynharari.com/book/sapiens-2/" target="_blank" rel="noreferrer">
                                            <img className="book-pic" alt="sapiens" src="../images/sapiens-225.jpg"></img>
                                        </a>
                                    </div>
                                </div>
                                <div className="col anim_element">
                                    <div className="book">
                                        <a href="https://www.penguinrandomhouse.com/books/566677/human-compatible-by-stuart-russell/" target="_blank" rel="noreferrer">
                                            <img className="book-pic" alt="human-compatible" src="../images/human-compatible-225.jpg"></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="anim_element" id="books-description">
                                <p>Considering how our development shapes the world we build tomorrow</p>
                            </div>
                        </div>
                    </div>
                    <div className="row section-elements">
                        <div className="container-fluid anim_element element-header">
                            <h3>Go Big Red</h3>
                        </div>
                        <div className="container-fluid anim_element">
                            <p>I was lucky enough to spend my time at Notre Dame in Dillon Hall</p>
                        </div>
                        <div className="col-md section-element anim_element">
                            <div>
                                <img className="about-pic" alt="interhall" src="../images/interhall_hockey-450.png"></img>
                            </div>
                        </div>
                        <div className="col-md section-element anim_element">
                            <div>
                                <img className="about-pic" alt="dillon" src="../images/dillon-grad-500.png"></img>
                            </div>
                        </div>
                    </div>
                    <div className="row section-elements">
                        <div className="col-md section-element">
                            <div className="element-header anim_element">
                                <h3>Contact</h3>
                            </div>
                            <div className="container anim_element" id="contact-form">
                                <Contact></Contact>
                            </div>
                        </div>
                        <div className="col-md section-element anim_element">
                            <div id="last-pic">
                                <img className="about-pic" alt="prof" src="../images/another-prof-pic.jpg" width="400"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}