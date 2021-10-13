/*
contact
Jason Miles
*/

import React, {Component} from 'react';
import axios from 'axios';

export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }
    
    getPostUrl() {
        if (process.env.NODE_ENV === 'production') {
            this.postUrl = "https://milj.herokuapp.com/contact";
        } else {
            this.postUrl = "http://localhost:8000/contact";
        }
    }

    // axios takes the form data and sends it to the backend
    handleFormSubmitAxios(e) {
        e.preventDefault();
        axios({
            method: "POST",
            url: this.postUrl,
            headers: {'content-type': 'application/json'},
            data: this.state
        }).then( (result) => {
            if (result.data.status === 'success') {
                alert("message sent");
                this.resetForm();
            } else if (result.data.status === 'fail') {
                alert("failed to send");
            }
        });
    };

    resetForm() {
        this.setState({
            name: '',
            email: '',
            message: ''
        });
    }

    render() {
        return (
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name.."
                    value={this.state.name}
                    onChange={e => this.setState({name: e.target.value})}
                />
                
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Your email.."
                    value={this.state.email}
                    onChange={e => this.setState({email: e.target.value})}
                />
                
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="What's up!" style={{height: 200}}
                    onChange={e => this.setState({message: e.target.value})}
                    value={this.state.message}
                />

                <input id="submit-input" type="submit" onClick={e => this.handleFormSubmitAxios(e)} value="Submit" />

            </form>
        );
    }
}