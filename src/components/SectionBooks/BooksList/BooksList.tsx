import React from 'react';
import { Link } from 'react-router-dom';

import { IBook } from 'redux/books/types';

import BookCard from '../BookCard/BookCard';

type Books = {
    books: Array<IBook>;
};

export default function BooksList({ books }: Books) {

    return (
        <ul className="section-books__list grid-three">
            {books &&
                books.length > 0 &&
                books.map((item: any) => (
                    <li className="list__item" key={item.id}>
                        <Link to={`/books/${item.id}`}>
                            <BookCard item={item} />
                        </Link>
                    </li>
                ))}
        </ul>
    );
}
