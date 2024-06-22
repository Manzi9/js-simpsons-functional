import React, { Component } from "react";
class Name extends Component {
  state = {};
  render() {
    return <p>{this.props.title}</p>;
  }
}

// function Name({ name }) {
//   return <h2>{name}</h2>;
// }

export default Name;
