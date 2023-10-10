import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import filters from './filter/slice';
import books from './books/slice';
import search from './search/slice';
import book from './detailBook/slice'

export const store = configureStore({
    reducer: { 
      filters, 
      books,
      search,
      book
    },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
