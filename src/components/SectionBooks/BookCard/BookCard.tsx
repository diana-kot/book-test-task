import React from 'react';

import { getCroppedSymbols } from 'utils/Functions';

interface BookCardInt {
    item: any;
}

export default function BookCard({ item }: BookCardInt) {
    let image = item.volumeInfo.imageLinks?.smallThumbnail;
    let title = item.volumeInfo?.title;
    let authors = item.volumeInfo?.authors;
    let categories = item.volumeInfo?.categories;

    return (
        <div className="book-card">
            <div style={{ backgroundColor: image ? '' : 'white' }} className="book-card__image">
                {image ? <img src={image} alt="books" /> : ''}
            </div>
            <div className="book-card__content">
                <p className="book-card__text book-card__text-category">{categories ? categories[0] : ''}</p>
                <p className="book-card__title">{title ? getCroppedSymbols(title, 35) : ''}</p>
                <p className="book-card__text">{authors ? authors : ''}</p>
            </div>
        </div>
    );
}
