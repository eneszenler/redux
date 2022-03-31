import {useEffect} from "react";

import {useSelector, useDispatch} from "react-redux";
import {
  selectFilteredTodos,
  getTodosAsync,
  toggleTodoAsync,
  removeTodoAsync,
} from "../redux/todos/todosSlice";

function TodoList() {
  const dispatch = useDispatch();

  const selectTodos = useSelector(selectFilteredTodos);
  const isLoading = useSelector((state) => state.todos.isLoading);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, []);

  const handleToggle = async (id, completed) => {
    await dispatch(toggleTodoAsync({id, data: {completed}}));
  };

  if (isLoading) {
    return <div style={{padding: 15, fontSize: 16}}>...Loading</div>;
  }

  if (error) {
    return (
      <div style={{padding: 15, fontSize: 16}}>
        <b>Error:</b> {error}
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {selectTodos.map((item, i) => (
        <li key={i} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggle(item.id, !item.completed)}
            />
            <label>{item.title}</label>
            <button
              className="destroy"
              onClick={() => dispatch(removeTodoAsync(item.id))}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
