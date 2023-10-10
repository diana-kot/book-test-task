import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Loader from 'UI/Loader/Loader';
import DetailBook from './DetailBook/DetailBook';
import ErrorInfo from 'components/ErrorInfo/ErrorInfo';

import { useAppDispatch } from 'redux/store';

import { fetchDetaiBook } from 'redux/detailBook/asyncActions';
import { selectBookData } from 'redux/detailBook/selectors';

export default function SectionDetailBook() {
    const dispatch = useAppDispatch();

    const { item, status } = useSelector(selectBookData);

    const { id } = useParams();

    const getBook = () => {
        if (id) {
            dispatch(fetchDetaiBook(id));
        }
    };

    useEffect(() => {
        getBook();
    }, []);

    return (
        <section className="section-book">
            <div className="center section-book__container">
                {status === 'error' && <ErrorInfo />}
                <div className="section-book__content">
                    {status === 'loading' && <Loader />}
                    <DetailBook book={item} />
                </div>
            </div>
        </section>
    );
}
