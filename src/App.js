import React, { Component } from 'react';
import './App.css';
import RegForm from './components/RegForm';
import LoginForm from './components/LoginForm';
import UpdateForm from './components/UpdateForm';
import { Button } from 'reactstrap';

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
    return <div className="row"><div className="col-md-8"> <Button color="info" onClick={this.handleRegister}>Register</Button> <Button color="success" onClick={this.handleLogin}>Login</Button> <Button color="primary" onClick={this.handleUpdate}>Update</Button></div></div>;
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
