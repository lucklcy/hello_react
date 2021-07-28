import React, { Component } from "react";
import Item from "../Item";
import styles from "./index.module.less";

export default class List extends Component {
  render() {
    const { todos: todoList, deleteTodo, updateTodo } = this.props;
    if (!todoList || todoList.length === 0)
      return (
        <div className={[styles.list, styles.no_data].join(" ")}>
          <span>暂无任务...</span>
        </div>
      );
    return (
      <ul className={styles.list}>
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
