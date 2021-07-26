import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <input type="checkbox" />
        <span>
          已完成
          <i>1</i>
          /全部
          <i>2</i>
        </span>
        <button className="clear-all">清除已完成任务</button>
      </div>
    );
  }
}
