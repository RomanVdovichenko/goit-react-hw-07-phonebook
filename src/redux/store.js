import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slice';
import { contactsApi } from './contactsSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactsApi.middleware]
})

setupListeners(store.dispatch);

