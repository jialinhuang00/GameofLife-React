import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Box extends Component {
  static propTypes = {
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
    selectBox: PropTypes.function.isRequired,
    id: PropTypes.number.isRequired,
    boxClass: PropTypes.string.isRequired

  }
  render() {
    return (
      <div
        className={this.props.boxClass}
        id={this.props.id}
        onClick={(e) => {
          this.props.selectBox(this.props.row, this.props.col)
        }}
      />
    )
  }
}
