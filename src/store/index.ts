import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';
import { useDispatch } from 'react-redux';
import { pizzaApi } from './pizza/pizza.api';
import favouritesSlice from './pizza/pizzaSlice';

export const store = configureStore({
  reducer: {
    [pizzaApi.reducerPath]:pizzaApi.reducer,
    favourites:favouritesSlice
  },
  middleware:getDefaultMiddleWare=>getDefaultMiddleWare().concat(pizzaApi.middleware)
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch