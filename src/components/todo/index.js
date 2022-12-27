import React from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";

import { toggleTodo, deleteTodo } from "../../store/actions/creators/todo";

import styles from './index.module.css';

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleTodoItem = () => {
    dispatch(toggleTodo(todo.id));
  }

  const handleOnDeleteClick = (event) => {
    dispatch(deleteTodo(todo.id))
    event.stopPropagation()
  }

  return (
    <li className={styles.item} onClick={toggleTodoItem}>
      <span className={styles.close} onClick={handleOnDeleteClick}>x</span>
      {todo.completed ? "👌" : "👋"}{" "}
      <span
        className={cx({
          [styles.completed]: todo.completed,
        })}
      >
        {todo.content}
      </span>
    </li>
  );
};
