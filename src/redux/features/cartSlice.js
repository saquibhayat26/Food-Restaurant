import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const cartIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (cartIndex >= 0) {
        state.items[cartIndex].productQuantity += 1;
      } else {
        const tempProducts = { ...action.payload, productQuantity: 1 };
        state.items.push(tempProducts);
      }
    },
    removeFromCart(state, action) {
      if (action.payload === 0) {
        state.items.splice(0, state.items.length);
      } else {
        const filterCartItems = state.items.filter((item) => {
          if (item.id === action.payload && item.productQuantity > 1) {
            return (item.productQuantity -= 1);
          } else {
            return item.id !== action.payload;
          }
        });
        state.items = filterCartItems;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
