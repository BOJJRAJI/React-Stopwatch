import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {timer: 0}

  startTimer = () => {
    this.timerId = setInterval(() => {
      this.setState(prevState => ({timer: prevState.timer + 1}))
    }, 1000)
  }

  stopTimer = () => {
    clearInterval(this.timerId)
  }

  resetTimer = () => {
    clearInterval(this.timerId)
    this.setState({timer: 0})
  }

  convertIntoTimerFormat = () => {
    const {timer} = this.state
    let minutes = 0
    let seconds = 0

    if (timer > 60) {
      minutes = Math.floor(timer / 60)
      seconds = timer - minutes * 60
    } else {
      minutes = 0
      seconds = timer
    }

    const secondsFormate = seconds > 9 ? seconds : `0${seconds}`
    const minutesFormate = minutes > 9 ? minutes : `0${minutes}`
    console.log(`${minutesFormate}:${secondsFormate}`)

    return `${minutesFormate}:${secondsFormate}`
  }

  render() {
    this.convertIntoTimerFormat()

    return (
      <div className="bg-container">
        <div className="app-container">
          <div className="stopwatch-card">
            <h1 className="heading">Stopwatch</h1>
            <div className="timer-card">
              <div className="timer-heading-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                  className="clock-icon"
                  alt="stopwatch"
                />
                <h1 className="timer-heading">Timer</h1>
              </div>
              <h1 className="timer">{this.convertIntoTimerFormat()}</h1>
              <div>
                <button
                  className="start-button"
                  type="button"
                  onClick={this.startTimer}
                >
                  Start
                </button>
                <button
                  className="stop-button"
                  type="button"
                  onClick={this.stopTimer}
                >
                  Stop
                </button>
                <button
                  className="reset-button"
                  type="button"
                  onClick={this.resetTimer}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
