import React, { Component } from 'react';
import './App.css';
const axios = require('axios');


export default class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    axios.post('192.168.0.2:1234/', this.state.value)
        .then(response => this.setState({ resp: response.data}))
    console.log(this.state.resp);
    event.preventDefault();
  }

  render() {
    return (
      <div class="Message">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}
