import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  handToggle = (event) => {
    const { toggleAll } = this.props;
    toggleAll && toggleAll(event.target.checked);
  };

  render() {
    const { todos: todoList } = this.props;
    const doneItemArr = todoList.filter((item) => item.done);
    return (
      <div className="footer">
        <label>
          <input type="checkbox" onChange={this.handToggle} />
          <span>
            已完成
            <i>{doneItemArr.length}</i>
            /全部
            <i>{todoList.length}</i>
          </span>
        </label>
        <button className="clear-all">清除已完成任务</button>
      </div>
    );
  }
}
