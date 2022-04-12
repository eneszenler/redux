import {createSlice} from "@reduxjs/toolkit";
import {myData} from "../myData";

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: myData,
    money: 100000000000,
    amount: 0,
    recipeItems: [],
  },
  reducers: {
    setQtd: (state, action) => {
      const newItem = action.payload;
      if (newItem) {
        if (state.recipeItems.length > 0) {
          const selectedItem = state.recipeItems.find(
            (item) => item.name === action.payload.name
          );
          if (selectedItem) {
            selectedItem.qtd = action.payload.qtd;
          } else {
            state.recipeItems = [...state.recipeItems, newItem];
          }
        } else {
          state.recipeItems = [...state.recipeItems, newItem];
        }
      }
    },
    total: (state, action) => {
      console.log(action.payload);
      state.amount += action.payload;
      state.money -= action.payload;
    },
  },
});

export const {setQtd, total} = productSlice.actions;
export default productSlice.reducer;
