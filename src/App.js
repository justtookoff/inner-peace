import React, { Component } from 'react';
import fire from './config/Fire';
import Login from './Login';
import Home from './Home';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount(){
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({user});
      }else{
        this.setState({user : null});
      }
    })
  }

  render() {
    return (
      <div>
    {this.state.user ? (<Home />) : (<Login />)}
      </div>
    );
  }
}

export default App;


/*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
</div>*/