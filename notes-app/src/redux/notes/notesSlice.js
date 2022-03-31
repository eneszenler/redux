import {createSlice} from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      {
        title: "note1",
        description: "Lorem ipsum dolor",
        color: "pink",
      },
      {
        title: "note2",
        description: "Lorem ipsum dolor",
        color: "green",
      },
      {
        title: "note3",
        description: "Lorem ipsum dolor",
        color: "yellow",
      },
    ],
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    filterItems: (state, action) => {
      const filtered = action.payload.filter;
      console.log(filtered);

      state.items = state.items.filter((item) => item.completed === filtered);
    },
  },
});

export const {addNote, filterItems} = notesSlice.actions;
export default notesSlice.reducer;
