// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    setInterval(() => {
      this.setState(prevState => ({count: prevState.count + 10}))
    }, 1000)
  }

  onApplyBreak = () => {
    setInterval(() => {
      this.setState(prevState => ({count: prevState.count - 10}))
    }, 1000)
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="count">
          Speed is <span>{count}</span>mph
        </h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons">
          <button type="button" onClick={this.onAccelerate} className="button1">
            Accelerate
          </button>
          <button type="button" onClick={this.onApplyBreak} className="button2">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
