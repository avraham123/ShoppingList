// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import shoppingListReducer from './shoppingListSlice';

const store = configureStore({
  reducer: {
    shoppingList: shoppingListReducer,
    // Add more reducers here if needed
  },
});

export default store;
