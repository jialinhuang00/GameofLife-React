import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Box from './Box'

export default class Grid extends PureComponent {
  static propTypes = {
    gridFull: PropTypes.array.isRequired,
    rows: PropTypes.number.isRequired,
    cols: PropTypes.number.isRequired,
    selectBox: PropTypes.func.isRequired
  }
  render() {
    const width = this.props.cols * 14
    const rowsArr = []
    let boxClass = ''
    let i
    let j
    for (i = 0; i < this.props.rows; i += 1) {
      for (j = 0; j < this.props.cols; j += 1) {
        const boxID = `${i}-${j}`
        boxClass = this.props.gridFull[i][j] ? 'box on' : 'box off'
        rowsArr.push(<Box
          boxClass={boxClass}
          key={boxID}
          id={boxID}
          row={i}
          col={j}
          selectBox={this.props.selectBox}
        />)
      }
    }
    return (
      <tr className="grid" style={{ width }}>
        {rowsArr}
      </tr>
    )
  }
}
