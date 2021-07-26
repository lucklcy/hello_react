import React, { Component } from "react";
import "./index.css";
import Item from "../Item";

export default class List extends Component {
  render() {
    const { todos: todoList } = this.props;
    return (
      <ul className="list">
        {todoList &&
          todoList.map((todo) => <Item key={todo.id} {...todo}></Item>)}
      </ul>
    );
  }
}
