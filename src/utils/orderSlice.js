import { createSlice } from "@reduxjs/toolkit";

// Load initial items from localStorage or default to empty array
const loadItems = () => {
  const storedItems = localStorage.getItem('orderItems');
  return storedItems ? JSON.parse(storedItems) : [];
};

const orderSlice = createSlice({
  name: 'Order',
  initialState: {
    items: loadItems(), // Initialize items from localStorage
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem('orderItems', JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item._id !== action.payload.id);
      localStorage.setItem('orderItems', JSON.stringify(state.items));
    },
    clearAll: (state) => {
      state.items = [];
      localStorage.removeItem('orderItems');
    }
  }
});

export const { addItem, removeItem, clearAll } = orderSlice.actions;

export default orderSlice.reducer;
