import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllQuotes = createAsyncThunk("quotes/fetchAll", async () => {
  const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}quotes`);
  return res.data;
});

export const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchAllQuotes.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    },
    [fetchAllQuotes.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchAllQuotes.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default quotesSlice.reducer;
