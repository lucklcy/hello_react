import React, { Component } from "react";
import "./index.css";

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
        className={mouseIsEnter ? "active item" : "item"}
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
          className="delete"
          style={{ display: mouseIsEnter ? "block" : "none" }}
          onClick={this.handleDelete(id)}
        >
          删除
        </button>
      </li>
    );
  }
}
