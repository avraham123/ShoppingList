// src/redux/shoppingListSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addItem, removeItem } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
