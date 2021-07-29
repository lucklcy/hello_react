import React, { Component } from "react";
import styles from "./index.module.less";

export default class Add extends Component {
  handleInputEnter = (event) => {
    if (event.keyCode !== 13) return;
    const val = event.target.value.trim();
    if (val === "") {
      return alert("请输入内容");
    }
    let { addTodo } = this.props;
    addTodo && addTodo(val);
    event.target.value = "";
  };
  render() {
    return (
      <div className={styles.add}>
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
          onKeyUp={this.handleInputEnter}
        />
      </div>
    );
  }
}
