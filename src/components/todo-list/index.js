import { useState } from "react";
import { useSelector } from "react-redux";
import { todosSelector } from "../../store/selectors/todo";
import { Todo } from "../todo";

import styles from "./index.module.css";

export const TodoList = () => {
  const todos = useSelector(todosSelector);
  const [isFiltrate, setIsFiltrate] = useState(false);

  return (
    <>
      <label>
        Только незавершенные
        <input
          type="checkbox"
          onChange={(e) => setIsFiltrate(e.target.checked)}
          className={styles["checkbox_btn"]}
        />
      </label>
      <ul className={styles.list}>
        {(isFiltrate ? todos.filter((todo) => !todo.completed) : todos).map(
          (todo) => (
            <Todo key={todo.id} todo={todo} />
          )
        )}
      </ul>
    </>
  );
};
