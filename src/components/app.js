import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
      This is the outer app part
      {this.props.children}
      </div>
    );
  }
}
