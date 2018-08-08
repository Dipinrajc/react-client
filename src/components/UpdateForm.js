import React, { Component } from 'react';
import { callApi } from '../CallApi';
import { Button } from 'reactstrap';
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
    } else {
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
      <div className="row">
        <div className="col-md-8">
          <div className="container">
            <form className="form" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">
                  Username:
              </label>
                <input className="form-control" name="username" type="text" value={this.state.username} onChange={this.handleUserNameChange} />
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  Password:
              </label>
                <input className="form-control" name="password" type="text" value={this.state.password} onChange={this.handlePasswordChange} />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <Button type="submit" color="success mr-2" onClick={this.handleRegister}>Submit</Button>
                  <Button color="danger" onClick={this.handleCancel}>Cancel</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateForm;