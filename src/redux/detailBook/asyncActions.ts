import { createAsyncThunk } from '@reduxjs/toolkit';

import { IBook } from './types';

import { SERVER_URL_API } from 'constants/config';

export const fetchDetaiBook = createAsyncThunk<IBook, string>(
    'books/fetchBookStatus',
    async (id, { rejectWithValue }) => {
        const url = `${SERVER_URL_API}/${id}`;

        try {
            const res = await fetch(url);

            if (!res.ok) {
                return rejectWithValue('Ошибка запроса!');
            }

            const data = await res.json();

            const { volumeInfo } = data;
            return volumeInfo;

        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    },
);
