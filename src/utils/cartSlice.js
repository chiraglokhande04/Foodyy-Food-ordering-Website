// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name:'Cart',
//     initialState:{
//         items:[]
//     },
//     reducers:{
//         addItem:(state,action)=>{
//             state.items.push(action.payload)
//         },
//         removeItem:(state,action)=>{
//             state.items = state.items.filter(item => item._id != action.payload.id);
            
//         },
//         clearCart:(state)=>{
//             state.items.length =0
//         }
//     }    
// })

// export const {addItem,removeItem,clearCart}= cartSlice.actions

// export default cartSlice.reducer


import { createSlice } from '@reduxjs/toolkit';

const loadCartFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load cart from localStorage", err);
    return [];
  }
};

const saveCartToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cart', serializedState);
  } catch (err) {
    console.error("Could not save cart to localStorage", err);
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: loadCartFromLocalStorage(),
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      saveCartToLocalStorage(state.items);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item._id !== action.payload.id);
      saveCartToLocalStorage(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveCartToLocalStorage(state.items);
    },
    updateCart: (state, action) => {
      state.items = action.payload;
      saveCartToLocalStorage(state.items);
    },
  },
});

export const { addItem, removeItem, clearCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
