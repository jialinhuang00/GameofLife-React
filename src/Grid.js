import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Box from './Box'

export default class Grid extends Component {
  static propTypes = {
    gridFull: PropTypes.array.isRequired,
    rows: PropTypes.number.isRequired,
    cols: PropTypes.number.isRequired,
    selectBox: PropTypes.function.isRequired
  }
  render() {
    const width = this.props.cols * 14
    const rowsArr = []
    let boxClass = ''
    let i = 0
    let j = 0
    for (; i < this.props.rows; i += 1) {
      for (; j < this.props.cols; j += 1) {
        const boxID = `${i}-${j}`
        boxClass = this.props.gridFull[i][j] ? 'box on' : 'box off'
        rowsArr.push(
          <Box
            boxClass={boxClass}
            key={boxID}
            row={i}
            col={j}
            selectBox={this.props.selectBox}
          />
        )
      }
    }
    return (
      <div className="grid" style={{ width }}>
        {rowsArr}
      </div>
    )
  }
}
