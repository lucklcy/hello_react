import React, { Component } from "react";

export default class Weather extends Component {
  state = {
    isHot: true,
  };
  // changeWeather() {
  //   const { isHot } = this.state;
  //   this.setState({ isHot: !isHot });
  // }
  changeWeather = () => {
    const { isHot } = this.state;
    this.setState({ isHot: !isHot });
  };
  render() {
    const { isHot } = this.state;
    return (
      <div>
        <h1>今天天气很{isHot ? "炎热" : "凉爽"}</h1>
        {/* <button onClick={() => this.changeWeather()}>切换</button> */}
        <button onClick={this.changeWeather}>切换</button>
      </div>
    );
  }
}
