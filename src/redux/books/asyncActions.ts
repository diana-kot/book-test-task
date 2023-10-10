import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IBook, SearchBooksParams } from './types';

import { setItemsTotal } from './slice';

import { SERVER_URL_API, API_KEY } from 'constants/config';

export const fetchBooks = createAsyncThunk<IBook[], SearchBooksParams>(
    'books/fetchBooks',
    async (params, { rejectWithValue, dispatch }) => {
        const { sortBy, orderBy, search, maxResults, currentPage } = params;
        const categoryParam = `+subject:${sortBy}`;
        const paginationParam = maxResults * (currentPage - 1);

        try {
            const { data } = await axios.get<any>(SERVER_URL_API, {
                params: {
                    q: `+intitle:${search}${sortBy && categoryParam}`,
                    projection: 'lite',
                    startIndex: paginationParam,
                    maxResults: maxResults,
                    orderBy: orderBy,
                    key: API_KEY,
                },
            });
            const { totalItems, items } = data;

            dispatch(setItemsTotal(totalItems));
            return items;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    },
);
