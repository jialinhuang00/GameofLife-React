import React, { Component } from "react";

export default class Box extends Component {
  render() {
    return (
      <div
        className={this.props.boxClass}
        id={this.props.id}
        onClick={e => {
          this.props.selectBox(this.props.row, this.props.col);
        }}
      />
    );
  }
}
