import React, { useState, useEffect, useRef } from 'react';

import { dropdownInt } from '../../settings/interfaces';

import { useOutsideClick } from 'hook/useOutsideClick';

import ArrowDown from '../../assets/images/svg/arrow_down.svg';

import './Dropdown.css';

export default function Dropdown({
    children,
    label = '',
    value = 'Выберите значение',
    type = 'dropdown',
    className = '',
    style = {},
}: dropdownInt) {
    const [open, setOpen] = useState(false);
    const [dropdownValue, setDropdownValue] = useState(value);

    const dropDownRef = useOutsideClick(() => {
        setOpen(false);
    });

    const closeInnerDropdown = () => {
        if (type === 'select') {
            setOpen(false);
        }
    };

    const openHandler = () => {
        setOpen(!open);
    };

    useEffect(() => {
        setDropdownValue(value);
    }, [value]);

    return (
        <div className="dropdown__container" ref={dropDownRef}>
            {label !== '' && <span className="dropdown__label">{label}</span>}
            <div className="dropdown__container-header" onClick={openHandler} style={style}>
                <span className="dropdown__container-title">{dropdownValue}</span>
                <div className={open ? 'dropdown__container-arrow_open' : 'dropdown__container-arrow'}>
                    <img src={ArrowDown} alt="стрелка" />
                </div>
            </div>
            <div className="dropdown__content" style={{ display: open ? 'flex' : 'none' }} onClick={closeInnerDropdown}>
                {children}
            </div>
        </div>
    );
}
