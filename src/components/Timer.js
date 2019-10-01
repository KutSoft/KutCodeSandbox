import React, { Component } from "react";

export default class Timer extends Component {
  doTick() {
    this.setState({ counter: this.state.counter + 1 });
  }
  resetCounter() {
    this.setState({ counter: 0 });
  }
  componentDidMount() {
    this.tickInterval = setInterval(this.doTick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.tickInterval);
  }
  getInitialState() {
    return { counter: 0 };
  }
  render() {
    return (
      <div className="well">
        <button
          type="button"
          title="Clic per resettare il timer"
          onClick={this.resetCounter}
        >
          Reset
        </button>
        &nbsp;
        <span className="glyphicon glyphicon-time" />
        &nbsp;
        <strong>{this.state.counter}</strong>
      </div>
    );
  }
}
