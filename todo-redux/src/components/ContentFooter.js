import React from "react";

import {useSelector, useDispatch} from "react-redux";
import {changeActivefilter, clearCompleted, selectTodos} from "../redux/todos/todosSlice";

function ContentFooter() {
  const dispatch = useDispatch();
  const items = useSelector(selectTodos);
  const itemsLeft = items.filter((item) => !item.completed);

  const activeFilter = useSelector((state) => state.todos.activeFilter);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft.length}</strong> item{itemsLeft.length > 1 && "s"} left
      </span>
      <ul className="filters">
        <li>
          <a
            className={activeFilter === "all" ? "selected" : ""}
            onClick={() => dispatch(changeActivefilter("all"))}
          >
            All
          </a>
        </li>
        <li>
          <a
            className={activeFilter === "active" ? "selected" : ""}
            onClick={() => dispatch(changeActivefilter("active"))}
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={activeFilter === "completed" ? "selected" : ""}
            onClick={() => dispatch(changeActivefilter("completed"))}
          >
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed" onClick={() => dispatch(clearCompleted())}>
        Clear completed
      </button>
    </footer>
  );
}

export default ContentFooter;
