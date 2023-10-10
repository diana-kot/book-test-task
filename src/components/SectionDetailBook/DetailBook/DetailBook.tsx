import React from 'react';

import { IBook } from 'redux/books/types';

import './DetailBook.css';

type Book = {
    book: IBook;
};

export default function DetailBook({ book }: Book) {
    const image = book.imageLinks?.smallThumbnail;

    return (
        <div className="detail-book">
            <div className="detail-book__image">{image ? <img src={image} alt="book" /> : ''}</div>
            <div className="detail-book__text">
                <div className="detail-book__category">{book.categories ? book.categories : ''}</div>
                <div className="detail-book__title">{book.title ? book.title : ''}</div>
                <div className="detail-book__author">{book.authors ? book.authors.join(", ") || '-' : ''}</div>
                <div className="detail-book__description">{book.description ? book.description.replace(/<[^>]+>/g, '') : ''}</div>
            </div>
        </div>
    );
}
