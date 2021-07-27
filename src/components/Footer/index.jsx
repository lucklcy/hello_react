import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  handToggle = (event) => {
    const { toggleAll } = this.props;
    toggleAll && toggleAll(event.target.checked);
  };

  handleClearDone = () => {
    const { clearDone } = this.props;
    if (window.confirm("确定清除所有已完成任务么？")) clearDone && clearDone();
  };

  render() {
    const { todos: todoList } = this.props;
    const doneItemArr = todoList.filter((item) => item.done);
    return (
      <div className="footer">
        <label>
          <input
            type="checkbox"
            checked={doneItemArr.length === todoList.length}
            onChange={this.handToggle}
          />
          <span>
            已完成
            <i>{doneItemArr.length}</i>
            /全部
            <i>{todoList.length}</i>
          </span>
        </label>
        <button className="clear-all" onClick={this.handleClearDone}>
          清除已完成任务
        </button>
      </div>
    );
  }
}
