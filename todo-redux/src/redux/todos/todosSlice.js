import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getTodosAsync = createAsyncThunk("todos/getTodosAsync", async () => {
  const res = await axios("http://localhost:7000/todos");
  return res.data;
});

export const addTodoAsync = createAsyncThunk("todos/addTodosAsync", async (data) => {
  const res = await axios.post("http://localhost:7000/todos", data);
  return res.data;
});

export const toggleTodoAsync = createAsyncThunk(
  "todos/toggleTodosAsync",
  async ({id, data}) => {
    const res = await axios.patch(`http://localhost:7000/todos/${id}`, data);
    return res.data;
  }
);

export const removeTodoAsync = createAsyncThunk("todos/removeTodosAsync", async (id) => {
  await axios.delete(`http://localhost:7000/todos/${id}`);
  return id;
});

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    activeFilter: "all",
    isNewItemLoading: false,
    newItemError: null,
  },
  reducers: {
    changeActivefilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: (state) => {
      const filtered = state.items.filter((item) => item.completed === false);
      state.items = filtered;
    },
  },
  extraReducers: {
    // get todos
    [getTodosAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getTodosAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [getTodosAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    // add todo
    [addTodoAsync.pending]: (state, action) => {
      state.isNewItemLoading = true;
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      state.isNewItemLoading = false;
      state.items.push(action.payload);
    },
    [addTodoAsync.rejected]: (state, action) => {
      state.isNewItemLoading = false;
      state.newItemError = action.error.message;
    },
    // toggle todo
    [toggleTodoAsync.fulfilled]: (state, action) => {
      const {id, completed} = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      state.items[index].completed = completed;
    },
    // remove todo
    [removeTodoAsync.fulfilled]: (state, action) => {
      const id = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      state.items.splice(index, 1);
    },
  },
});

export const selectTodos = (state) => state.todos.items;

export const selectFilteredTodos = (state) => {
  if (state.todos.activeFilter === "all") {
    return state.todos.items;
  }

  return state.todos.items.filter((todo) =>
    state.todos.activeFilter === "active" ? todo.completed === false : todo.completed
  );
};

export const {changeActivefilter, clearCompleted} = todosSlice.actions;
export default todosSlice.reducer;
