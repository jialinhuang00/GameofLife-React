import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Box extends PureComponent {
  static propTypes = {
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    selectBox: PropTypes.func.isRequired,
    boxClass: PropTypes.string.isRequired
  }
  render() {
    return (
      <div
        className={this.props.boxClass}
        id={this.props.id}
        role="presentation"
        onClick={
          () => this.props.selectBox(this.props.row, this.props.col)
        }
      />
    )
  }
}

