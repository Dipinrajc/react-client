import React, { Component } from 'react';
import { callApi } from '../CallApi';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
      <Row>
      <Col xs="12">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input type="username" name="username" id="username" placeholder="Username" value={this.state.username} onChange={this.handleUserNameChange} />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
          </FormGroup>
          <FormGroup>
            <Button type="submit" color="success mr-2" onClick={this.handleRegister}>Submit</Button>
            <Button color="danger" onClick={this.handleCancel}>Cancel</Button>
          </FormGroup>
        </Form>
      </Col>
    </Row>
    );
  }
}

export default UpdateForm;