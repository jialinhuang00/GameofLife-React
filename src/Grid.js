import React, { Component } from "react";
import Box from "./Box";

export default class Grid extends Component {
  render() {
    const width = this.props.cols * 14;
    var rowsArr = [];
    var boxClass = "";

    for (var i = 0; i < this.props.rows; i++) {
      for (var j = 0; j < this.props.cols; j++) {
        let boxID = i + "-" + j;
        boxClass = this.props.gridFull[i][j] ? "box on" : "box off";
        rowsArr.push(
          <Box
            boxClass={boxClass}
            key={boxID}
            row={i}
            col={j}
            selectBox={this.props.selectBox}
          />
        );
      }
    }
    return (
      <div className="grid" style={{ width }}>
        {rowsArr}
      </div>
    );
  }
}
