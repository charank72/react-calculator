import React, { Component } from "react";
class Display extends Component {
  render() {
    return (
      <div className="display">
        <div className="inp">{this.props.inp === "" ? 0 : this.props.inp}</div>
        <div className="out">{this.props.out}</div>
      </div>
    );
  }
}
export default Display;
