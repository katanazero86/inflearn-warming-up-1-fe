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
      console.log(payload);
      state.carts.push(payload.payload);
    },
    removeCart: (state, payload) => {},
    updateCart: (state, payload) => {},
  },
});

export const { addCart, removeCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
