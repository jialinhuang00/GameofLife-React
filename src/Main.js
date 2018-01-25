import React, { Component } from 'react'
import 'react-bootstrap'
import Grid from './Grid'
import Buttons from './Buttons'

const arrayClone = arr => JSON.parse(JSON.stringify(arr))


export default class Main extends Component {
  constructor() {
    super()
    this.speed = 200
    this.rows = 20
    this.cols = 50

    this.state = {
      generation: 0,
      gridFull: Array(this.rows)
        .fill()
        .map(() => Array(this.cols).fill(false))
    }
  }
  componentDidMount() {
    this.seed()
    this.playButton()
  }
  //   choose the box and change it boolean and css's color
  selectBox = (row, col) => {
    const gridFull = arrayClone(this.state.gridFull)
    gridFull[row][col] = !gridFull[row][col]
    this.setState({ gridFull })
  }

  // load the page and randomly sow the seeds

  // **********************************************************
  fast = () => {
    this.speed = 100
    this.playButton()
  }
  slow = () => {
    this.speed = 1000
    this.playButton()
  }
  playButton = () => {
    clearInterval(this.intervalID)
    this.intervalID = setInterval(this.play, this.speed)
  }
  pauseButton = () => {
    clearInterval(this.intervalID)
  }
  clear = () => {
    clearInterval(this.intervalID)
    const gridFull = Array(this.rows)
      .fill()
      .map(() => Array(this.cols).fill(false))
    this.setState({ generation: 0, gridFull })
  }
  seed = () => {
    this.clear()
    const gridFull = arrayClone(this.state.gridFull)
    let i
    let j
    for (i = 0; i < this.rows; i += 1) {
      for (j = 0; j < this.cols; j += 1) {
        if (Math.floor(Math.random() * 4) === 1) {
          gridFull[i][j] = true
        }
      }
    }
    this.setState({ gridFull })
  }
  // **********************************************************
  gridSize = (size) => {
    switch (size) {
      case 1:
        this.cols = 20
        this.rows = 10
        break
      case 2:
        this.cols = 50
        this.rows = 30
        break
      default:
        this.cols = 70
        this.rows = 50
    }
    this.clear()
  };
  play = () => {
    const g = this.state.gridFull
    const g2 = arrayClone(this.state.gridFull)
    let i
    let j
    // game of life's logic
    // 1  2  3
    // 4  *  6
    // 7  8  9
    for (i = 0; i < this.rows; i += 1) {
      for (j = 0; j < this.cols; j += 1) {
        let count = 0
        // logic sequence: 2, 1, 3
        if (i > 0) if (g[i - 1][j]) count += 1
        if (i > 0 && j > 0) if (g[i - 1][j - 1]) count += 1
        if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count += 1
        // logic sequence: 4, 6
        if (j < this.cols - 1) if (g[i][j + 1]) count += 1
        if (j > 0) if (g[i][j - 1]) count += 1
        // logic sequence: 8, 7, 9
        if (i < this.rows - 1) if (g[i + 1][j]) count += 1
        if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count += 1
        if (i < this.rows - 1 && j < this.cols - 1) if (g[i + 1][j + 1]) count += 1
        //   change g2
        if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false
        // we dont take the condition that count === 2 to our judgement,
        // cause that result in infinite changing and no stable pattern.
        if (!g[i][j] && count === 3) g2[i][j] = true
      }
    }
    this.setState({
      gridFull: g2,
      generation: this.state.generation + 1
    })
  }


  render() {
    return (
      <div id="App">
        <div>
          <div id="title">Game of Life </div>
          <div id="generations">Generations: {this.state.generation}</div>
        </div>
        {/* this is a file not a react-bootstrap's component */}
        <Buttons
          playButton={this.playButton}
          pauseButton={this.pauseButton}
          slow={this.slow}
          fast={this.fast}
          clear={this.clear}
          seed={this.seed}
          gridSize={this.gridSize}
        />
        <table>
          <Grid
            gridFull={this.state.gridFull}
            cols={this.cols}
            rows={this.rows}
            selectBox={this.selectBox}
          />
        </table>
      </div>
    )
  }
}

