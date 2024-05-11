import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartPayload {
  id: number;
  count: number;
  name: string;
  imgUrl: string;
  price: number;
}

const initialState: { carts: CartPayload[] } = {
  carts: [],
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addCart: (state, payload: PayloadAction<CartPayload>) => {
      state.carts.push(payload.payload);
    },
    removeCart: (state, payload: PayloadAction<number>) => {
      state.carts = state.carts.filter((cart) => cart.id !== payload.payload);
    },
    updateCart: (state, payload: PayloadAction<{ id: number; count: number }>) => {
      const { id, count } = payload.payload;
      state.carts = state.carts.map((cart) => {
        if (cart.id === id) {
          return {
            ...cart,
            count,
          };
        }
        return cart;
      });
    },
  },
});

export const { addCart, removeCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
