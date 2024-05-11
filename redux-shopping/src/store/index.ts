import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/countSlice';
import cartReducer from './cart/cartSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      counterReducer,
      cartReducer,
    },
  });
};

export type AppStoreType = ReturnType<typeof makeStore>;
export type RootStateType = ReturnType<AppStoreType['getState']>;
export type AppDispatchType = AppStoreType['dispatch'];
