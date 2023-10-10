import React, { useEffect, useState } from 'react';

import InputSearch from '../../UI/InputSuarch/InputSearch';
import Button from '../../UI/Button/Button';
import Select from '../../UI/Select/Select';

import { useAppDispatch } from 'redux/store';
import { setSearchValue } from 'redux/search/slice';
import { setSortBy, setOrder } from 'redux/filter/slice';

import './SectionSearch.css';

import { ReactComponent as SearchIcon } from '../../assets/images/svg/search.svg';
import sectionSearchImage from '../../assets/images/sectionSearch/books.jpg';

export default function SectionSearch() {
    const [inputValue, setInputValue] = useState<string>('');

    const dispatch = useAppDispatch();

    const handleChangeSearchQuery = () => {
        dispatch(setSearchValue(inputValue));
    };

    const getActiveСategories = (value: string) => {
        if (value === 'all') {
            value = ''
            dispatch(setSortBy(value));
        }
        else {
            dispatch(setSortBy(value));
        }
        
    };

    const getActiveOrder = (value: string) => {
        dispatch(setOrder(value));
    };

    useEffect(() => {
        if (inputValue === '') {
            dispatch(setSearchValue(inputValue));
        }
    }, [inputValue]);

    return (
        <section className="section-search">
            <div className="center section-search__container">
                <div className="section-search__image">
                    <img src={sectionSearchImage} alt="books" />
                </div>
                <div className="section-search__content">
                    <h1 className="title section-search__title">Search for books</h1>
                    <div className="section-search__search">
                        <InputSearch
                            placeholder="Search"
                            inputValue={inputValue}
                            setInputValue={setInputValue}
                            handleChangeSearch={handleChangeSearchQuery}
                        />
                        <Button
                            insertElement={<SearchIcon />}
                            className="section-search-button"
                            callback={handleChangeSearchQuery}
                            size={'xlarge'}
                            border={true}
                        />
                    </div>
                    <div className="section-search__filters">
                        <Select
                            items={{
                                all: 'all',
                                art: 'art',
                                biography: 'biography',
                                computers: 'computers',
                                history: 'history',
                                medical: 'medical',
                                poetry: 'poetry',
                            }}
                            id={'categories'}
                            name={'categories'}
                            except={true}
                            selectedItemKey={'all'}
                            text={'Categories'}
                            callback={getActiveСategories}
                        />
                        <Select
                            items={{
                                relevance: 'relevance',
                                newest: 'newest',
                            }}
                            id={'order'}
                            name={'order'}
                            except={true}
                            text={'Sorting by'}
                            selectedItemKey={'relevance'}
                            callback={getActiveOrder}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
