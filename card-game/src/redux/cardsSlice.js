import {createSlice} from "@reduxjs/toolkit";
import {myData} from "./myData";

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    puan: 0,
    items: myData,
    selectedItems: [],
    completedItems: 0,
  },
  reducers: {
    compare: (state) => {
      if (state.selectedItems.length == 2) {
        let s1 = state.selectedItems[0];
        let s2 = state.selectedItems[1];

        if (s1.name === s2.name) {
          state.puan += 50;
          state.completedItems += 2;
        } else {
          state.puan -= 10;

          for (let i = 0; i < state.items.length; i++) {
            if (s1.id === state.items[i].id || s2.id === state.items[i].id) {
              state.items[i].visible = false;
            }
          }
        }

        state.selectedItems = [];
      }
    },
    addSelectedItems: (state, action) => {
      state.selectedItems = [...state.selectedItems, action.payload];
      console.log(state.selectedItems);
    },

    setVisible: (state, action) => {
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === action.payload) {
          state.items[i].visible = true;
        }
      }
    },
    shuffle: (state) => {
      for (let i = state.items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [state.items[i], state.items[j]] = [state.items[j], state.items[i]];
      }
    },
    restart: (state) => {
      state.puan = 0;
      state.completedItems = 0;
      for (let i = 0; i < state.items.length; i++) {
        state.items[i].visible = false;
      }
    },
  },
});

export const {
  compare,
  addSelectedItems,
  shuffle,
  restart,
  deleteSelectedItems,
  setVisible,
  completedItems,
} = cardsSlice.actions;
export default cardsSlice.reducer;
