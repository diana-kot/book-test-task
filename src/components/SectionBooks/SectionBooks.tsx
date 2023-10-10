import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import BooksList from './BooksList/BooksList';
import Loader from 'UI/Loader/Loader';
import Button from 'UI/Button/Button';
import ErrorInfo from 'components/ErrorInfo/ErrorInfo';

import { useAppDispatch } from 'redux/store';
import { selectBooksData } from 'redux/books/selectors';
import { selectFilterData } from 'redux/filter/selectors';
import { selectSearchData } from 'redux/search/selectors';

import { setChangePage } from 'redux/filter/slice';
import { resetItems } from 'redux/books/slice';

import { fetchBooks } from 'redux/books/asyncActions';

import './SectionBooks.css';

export default function SectionBooks() {
    const dispatch = useAppDispatch();

    const { items, status, totalItems } = useSelector(selectBooksData);
    const { orderBy, sortBy, startIndex, maxResults, currentPage } = useSelector(selectFilterData);
    const { search } = useSelector(selectSearchData);

    const [disabled, setDisabled] = useState(false);

    const getBooks = () => {
        dispatch(
            fetchBooks({
                search,
                startIndex,
                maxResults,
                sortBy,
                orderBy,
                currentPage,
            }),
        );
    };

    const changePage = () => {
        dispatch(setChangePage());
    };

    useEffect(() => {
        return () => {
            dispatch(resetItems());
        };
    }, [search, sortBy, orderBy]);

    useEffect(() => {
        return () => {
            dispatch(resetItems());
        };
    }, []);


    useEffect(() => {
        if (search) {
            getBooks();
        }
    }, [search, orderBy, sortBy, currentPage]);

    useEffect(() => {
        if (status !== 'loading' && items?.length) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [items]);

    if (!search) {
        return <h3>Enter the name of the book</h3>;
    }

    return (
        <section className="section-books">
            <div className="container center section-books__container">
                {status === 'error' && <ErrorInfo />}

                <div className="content__items">
                    {status === 'loading' && search !== '' ? <Loader /> : <></>}

                    <p className="section-books__count">Found {totalItems} results</p>
                    <BooksList books={items} />

                    {currentPage * maxResults < totalItems && items.length > 0 && (
                        <Button
                            text={status === 'loading' ? 'loading...' : 'load more'}
                            callback={changePage}
                            disabled={disabled}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}
