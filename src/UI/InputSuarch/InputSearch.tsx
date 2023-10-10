import React from 'react';

import { IInputSearch } from '../../settings/interfaces';

import './InputSearch.css';

export default function InputSearch({ placeholder, inputValue, setInputValue, handleChangeSearch }: IInputSearch) {
    
    const handleKeypress = (e: any) => {
        if (e.keyCode === 13) {
            handleChangeSearch();
        }
    };

    return (
        <div className="input-search">
            <input
                className="input-search__input"
                type="text"
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeypress}
            />
        </div>
    );
}
