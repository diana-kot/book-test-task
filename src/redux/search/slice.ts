import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { ISearchSliceState } from './types';

const initialState: ISearchSliceState = {
    search: '',
    currentPage: 1,
};

export const suarchSlice = createSlice({
    name: 'suarch',
    initialState,
    reducers: {
        setSearchValue: (state: ISearchSliceState, action: PayloadAction<string>) => {
            state.search = action.payload;
            state.currentPage = 1;
        },
    },
});

export const { setSearchValue } = suarchSlice.actions;

export default suarchSlice.reducer;
