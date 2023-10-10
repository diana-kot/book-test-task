import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchDetaiBook } from './asyncActions';
import { IBook, BookSliceState } from './types';

const initialState: BookSliceState = {
    item: {
        id: '',
        title: '',
        categories: [],
        authors: [],
        photoURL: '',
        description: '',
    },
    error: null,
    status: null,
};

const booksSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchDetaiBook.pending, (state) => {
            state.item = {
                id: '',
                title: '',
                categories: [],
                authors: [],
                photoURL: '',
                description: '',
            };
            state.status = 'loading';
            state.error = null;
        });

        builder.addCase(fetchDetaiBook.fulfilled, (state, action: PayloadAction<IBook>) => {
            state.item = action.payload;
            state.status = 'completed';
        });

        builder.addCase(fetchDetaiBook.rejected, (state, action: PayloadAction<any>) => {
            state.status = 'error';
            state.error = action.payload;
        });
    },
});

export default booksSlice.reducer;
