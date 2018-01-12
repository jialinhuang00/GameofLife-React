import React, { Component } from "react";
import {
  Button,
  ButtonToolbar,
  DropdownButton,
  MenuItem,
  ButtonGroup
} from "react-bootstrap";

export default class Buttons extends Component {
  handleSelect = e => {
    this.props.gridSize(e);
  };

  render() {
    return (
      <div className="center buttons">
        <ButtonToolbar>
          <ButtonGroup bsSize="small">
            <Button onClick={this.props.playButton}>Play</Button>
            <Button onClick={this.props.pauseButton}>Pause</Button>
          </ButtonGroup>
          <ButtonGroup bsSize="small">
            <Button onClick={this.props.fast}>Fast</Button>
            <Button onClick={this.props.slow}>Slow</Button>
          </ButtonGroup>
          <ButtonGroup bsSize="small">
            <Button onClick={this.props.clear}>Clear</Button>
            <Button onClick={this.props.seed}>Sow it</Button>
          </ButtonGroup>
          <DropdownButton
            bsSize="small"
            title="Grid Size"
            id="size-menu"
            onSelect={this.handleSelect}
          >
            {/* eventKey="1" doesnt work */}
            <MenuItem eventKey={1}>20 X 10</MenuItem>
            <MenuItem eventKey={2}>50 X 30</MenuItem>
            <MenuItem eventKey={3}>70 X 50</MenuItem>
          </DropdownButton>
        </ButtonToolbar>
      </div>
    );
  }
}
