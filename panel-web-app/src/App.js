import React, { Component } from 'react';
import './App.css';

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
    fetch('https://cors-anywhere.herokuapp.com/http://192.168.0.2:1234/panel', {
      method: 'post',
      //mode: 'no-cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({msg: this.state.value})
    }).then(res => console.log(res))
      .catch(e => console.log(e));

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
