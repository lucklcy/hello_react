import React, { Component } from "react";
import styles from "./index.module.less";

export default class Item extends Component {
  state = {
    mouseIsEnter: false,
  };
  checkChange = (id) => {
    return (event) => {
      const { updateTodo } = this.props;
      updateTodo && updateTodo(id, { done: event.target.checked });
    };
  };
  handleMouse = (mouseIsEnter) => {
    return () => {
      this.setState({ mouseIsEnter });
    };
  };

  handleDelete = (id) => {
    return () => {
      const { deleteTodo } = this.props;
      if (window.confirm("确定删除么？")) {
        deleteTodo && deleteTodo(id);
      }
    };
  };
  render() {
    const { mouseIsEnter } = this.state;
    const { id, text, done } = this.props;
    return (
      <li
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
        className={`${styles.item} ${mouseIsEnter ? styles.active : ""}`}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.checkChange(id)}
          />
          <span>{text}</span>
        </label>
        <button
          className={styles.delete}
          style={{ display: mouseIsEnter ? "block" : "none" }}
          onClick={this.handleDelete(id)}
        >
          删除
        </button>
      </li>
    );
  }
}
