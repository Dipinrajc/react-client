import React, { Component } from 'react';
import { callApi } from './CallApi';
class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleUserNameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.username !== '' && this.state.password !== '') {
      const url = '/v1/user/update?username=' + this.state.username + '&password=' + this.state.password;
      callApi(url).then(response => {
        alert(response.message);
        this.inputChange(response);
      });
    }else{
      alert("Please fill all the fields");
    }
    event.preventDefault();
  }

  handleCancel(event) {
    const data = { 'success': true };
    this.inputChange(data);
    event.preventDefault();
  }

  inputChange = (data) => {
    this.props.changeHandler(data);
  }

  render() {
    return (
      <form className="formDiv" onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" value={this.state.username} onChange={this.handleUserNameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
        </label>
        <br />
       <input className="btn btn-success" type="submit" value="Submit" />
        <input className="btn btn-danger" type="button" value="Cancel" onClick={this.handleCancel} />
      </form>
    );
  }
}

export default UpdateForm;