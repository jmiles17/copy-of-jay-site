import React, {Component} from 'react';

import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Message from './components/message';
import Experience from './components/experience';
import Projects from './components/projects';
import About from './components/about';
import Footer from './components/footer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callBackend = async () => {
    const response = await fetch('/');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    console.log("called");
    return body;
  }

  callAPI() {
    fetch("/")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}))
      .catch(err => err);
    console.log("called");
  }

  componentDidMount() {
    // this.callAPI();
    this.callBackend()
      .catch(err => console.log(err));
  }

  render() {
    return (
        <div id="page">
          <Navbar></Navbar>
          <Home></Home>
          <Message></Message>
          <Experience></Experience>
          <Projects></Projects>
          <About></About>
          <Footer></Footer>
        </div>
    );
  }
}

export default App;

