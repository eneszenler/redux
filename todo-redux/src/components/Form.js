import {useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import {addTodoAsync} from "../redux/todos/todosSlice";

function Form() {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.todos.isNewItemLoading);

  const handleSubmit = async (e) => {
    e.preventDefault();
    {
      title && (await dispatch(addTodoAsync({title})));
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{display: "flex", alignItems: "center"}}>
      <input
        disabled={isLoading}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {isLoading && <span style={{paddingRight: 10}}>Loading..</span>}
    </form>
  );
}

export default Form;
