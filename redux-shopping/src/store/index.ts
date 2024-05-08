import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/countSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      counterReducer,
    },
  });
};

export type AppStoreType = ReturnType<typeof makeStore>;
export type RootStateType = ReturnType<AppStoreType['getState']>;
export type AppDispatchType = AppStoreType['dispatch'];
