import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
            <section className="site-section" id="Experience">
                <div className="container-fluid" >
                    <div className="row section-header anim_header">
                        <h2>Experience</h2>
                    </div>
                    <div className="row section-elements">
                        <div className="col-md section-element" id="research">
                            <div className="anim_element">
                                <h3 className="experience-header">Research</h3>
                            </div>
                            <div className="element-content anim_element">
                                <p>Nov 2020 - May 2021</p>
                                <p>
                                During the winter and spring semester 2021, I worked as a quantum computing research intern with my school's Center for Research Computing.
                                My focus was learning about the variational quantum eigensolver algorithm and researching ways to optimize it.
                                I surprisingly enjoyed reading old chemistry notes and diving into the world of molecules, and I definitely appreciated hands-on experience with quantum computing.
                                </p>
                                <p>You can check out some of the work <a href="https://github.com/jmiles17/vqe-research" target="_blank" rel="noreferrer">here</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md section-element" id="ta">
                            <div className="anim_element">
                                <h3 className="experience-header">Teaching Assistant</h3>
                            </div>
                            <div className="element-content anim_element">
                                <p>Jan 2020 - Nov 2020</p>
                                <p>
                                Two of my favorite undergraduate courses were Computing Theory and Cryptography, and I wanted to help students enjoy them as much as I did.
                                As a TA, I was responsible for grading and holding virtual office hours, but I most appreciated building relationships with some students.
                                I loved working through problems together and sharing our enthusiasm in success.
                                </p>
                            </div>
                        </div>
                        <div className="col-md section-element" id="instructor">
                            <div className="anim_element">
                                <h3 className="experience-header">Programming Instructor</h3>
                            </div>
                            <div className="element-content anim_element">
                                <p>Jan 2019 - Jan 2021</p>
                                <p>
                                I am also very grateful for my time working with <a href="https://southbendcodeschool.com/" target="_blank" rel="noreferrer">South Bend Code School</a>, a local program that taught coding skills to students aged 7-18.
                                For about two years, I was an instructor there, helping kids with their projects in Scratch, web development, and Python.
                                I was lucky to meet so many great people and students and to learn just as much as I taught.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}