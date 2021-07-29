import React, { Component } from "react";
import Item from "../Item";
import styles from "./index.module.less";
import { ThemeContext } from "@/context";

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
      <ThemeContext.Consumer>
        {(context) => (
          <ul className={styles.list} data-context={context}>
            {todoList.map((todo) => (
              <Item
                key={todo.id}
                {...todo}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
                theme={this.context}
              ></Item>
            ))}
          </ul>
        )}
      </ThemeContext.Consumer>
    );
  }
}
