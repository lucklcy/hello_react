import React, { Component } from "react";
import "./index.css";
import Item from "../Item";

export default class List extends Component {
  render() {
    const { todos: todoList, deleteTodo, updateTodo } = this.props;
    if (!todoList || todoList.length === 0)
      return (
        <div className="list no-data">
          <span>暂无任务...</span>
        </div>
      );
    return (
      <ul className="list">
        {todoList.map((todo) => (
          <Item
            key={todo.id}
            {...todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          ></Item>
        ))}
      </ul>
    );
  }
}
