import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

export const add = createAsyncThunk(
    "counter/addNumber",
    async (amount) => {
        await new Promise((resolve)=> setTimeout(resolve, 1000));
        return amount;
    }
) 

const initialState = {
    number: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(add.pending, (state) => {
          state.number = state.number;
          console.log("state pending");
        })
        .addCase(add.fulfilled, (state, action) => {
          state.number += action.payload;
          console.log("state fulfilled");
        })
        .addCase(add.rejected, (state, action) => {
          state.number = state.number;
          console.log("state rejected");
        })
    }
})

export default counterSlice.reducer;