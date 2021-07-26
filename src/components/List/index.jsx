import React, { Component } from "react";
import "./index.css";
import Item from "../Item";

export default class List extends Component {
  render() {
    const { todos: todoList, deleteTodo, updateTodo } = this.props;
    return (
      <ul className="list">
        {todoList &&
          todoList.map((todo) => (
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
