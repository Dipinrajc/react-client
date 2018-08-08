import React, { Component } from 'react';
import './App.css';
import RegForm from './RegForm';
import LoginForm from './LoginForm';
import UpdateForm from './UpdateForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: this.getButtons()
    };
  }

  render() {
    return (this.state.response);
  }

  getButtons() {
    return <div className="buttonDiv"><button  className="btn btn-info" onClick={this.handleRegister}>Register</button><button className="btn btn-success" onClick={this.handleLogin}>Login</button><button  className="btn btn-warning" onClick={this.handleUpdate}>Update</button></div>;
  }

  handleLogin = () => {
    this.login();
  };

  login() {
    this.setState({ response: <LoginForm changeHandler={this.changeResponse.bind(this)}></LoginForm> });
  }

  handleRegister = () => {
    this.register();
  };

  register() {
    this.setState({ response: <RegForm changeHandler={this.changeResponse.bind(this)}></RegForm> });
  }

  handleUpdate = () => {
    this.update();
  };

  update() {
    this.setState({ response: <UpdateForm changeHandler={this.changeResponse.bind(this)}></UpdateForm> });
  }

  changeResponse(response) {
    if (response.success) {
      this.setState({ response: this.getButtons() });
    }
  }
}

export default App;
