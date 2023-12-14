import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onCLickAccelerateButton = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onCLickApplyBrakeButton = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="card-text">Speed is {speed}mph</h1>
        <p className="speed-limits">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons-container">
          <button
            type="button"
            className="accelerate-btn"
            onClick={this.onCLickAccelerateButton}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="brake-btn"
            onClick={this.onCLickApplyBrakeButton}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
