import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  desserts: [],
  totalAmount: 0,
  totalPrice: 0,
};

function recalcTotals(state) {
  state.totalAmount = state.desserts.reduce(
    (acc, dessert) => acc + (dessert.amount || 0),
    0
  );
  state.totalPrice = state.desserts.reduce(
    (acc, dessert) => acc + (dessert.amount || 0) * (dessert.price || 0),
    0
  );
}
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const item = state.desserts.find((dessert) => dessert.id == payload);
      if (item) item.amount = 1;
      recalcTotals(state);
    },
    increment: (state, { payload }) => {
      const item = state.desserts.find((dessert) => dessert.id == payload);
      if (item) item.amount += 1;
      recalcTotals(state);
    },
    decrement: (state, { payload }) => {
      const item = state.desserts.find((dessert) => dessert.id == payload);
      if (item && item.amount > 0) item.amount -= 1;
      recalcTotals(state);
    },
    removeFromCart: (state, { payload }) => {
      const item = state.desserts.find((dessert) => dessert.id == payload);
      if (item) item.amount = 0;
      recalcTotals(state);
    },
    resetCart: (state) => {
      state.desserts.forEach((dessert) => (dessert.amount = 0));
      recalcTotals(state);
    },
    setDessertsFromAPI: (state, { payload }) => {
      state.desserts = payload.map((dessert) => ({ ...dessert, amount: 0 }));
      state.totalAmount = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  increment,
  decrement,
  removeFromCart,
  resetCart,
  setDessertsFromAPI,
} = cartSlice.actions;

export default cartSlice.reducer;
