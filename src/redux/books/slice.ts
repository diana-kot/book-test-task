import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchBooks } from './asyncActions';
import {  BooksSliceState } from './types';

const initialState: BooksSliceState = {
    items: [],
    status: null,
    error: null,
    totalItems: 0,
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        resetItems(state) {
            state.items = [];
        },
        setItemsTotal(state, action: PayloadAction<number>) {
            state.totalItems = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        });

        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.status = 'completed';
            state.items = [...state.items, ...action.payload];
        });

        builder.addCase(fetchBooks.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.payload;
            state.items = [];
        });
    },
});

export const { resetItems, setItemsTotal } = booksSlice.actions;

export default booksSlice.reducer;
