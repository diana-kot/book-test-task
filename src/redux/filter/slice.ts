import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { IFilterSliceState } from './types';

const initialState: IFilterSliceState = {
    orderBy: 'relevance',
    sortBy: '',
    startIndex: 0,
    maxResults: 30,
    currentPage: 1,
};

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSortBy: (state: IFilterSliceState, action: PayloadAction<string>) => {
            state.sortBy = action.payload;
            state.currentPage = 1;
        },
        setOrder: (state: IFilterSliceState, action: PayloadAction<string>) => {
            state.orderBy = action.payload;
            state.currentPage = 1;
        },
        setChangePage: (state: IFilterSliceState) => {
            state.currentPage++;
        },
    },
});

export const { setSortBy, setOrder, setChangePage } = filterSlice.actions;

export default filterSlice.reducer;
