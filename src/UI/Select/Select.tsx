import React, { useState } from 'react';

import { SelectStateInt, SelectInt } from '../../settings/interfaces';

import Dropdown from '../Dropdown/Dropdown';

 import  './Select.css';

export default function Select({
    items,
    id,
    name,
    label = '',
    except = false,
    selectedItemKey = undefined,
    type = 'select',
    className = '',
    style = {},
    text,
    callback,
}: SelectInt) {
    const [currentValue, setCurrentValue] = useState<SelectStateInt>(
        selectedItemKey !== undefined ? items[selectedItemKey as keyof typeof items] : 'Выберите значение',
    );
    const [currentValueKey, setCurrentValueKey] = useState<SelectStateInt>(selectedItemKey);

    const itemsList = Object.entries(items);

    const selectItem = (keyValue: string | number, value: string | number) => {
        setCurrentValue(value);
        setCurrentValueKey(keyValue);
        if (callback) {
            callback(value)
        }
    };

    const setSelectItem = (itemKey: string | number, value: string) => {
        return (
            <li className="DAS-select-item" onClick={() => selectItem(itemKey, value)} key={`${id}-${itemKey}`}>
                <input
                    type="radio"
                    checked={itemKey === currentValueKey}
                    id={`${id}-${itemKey}`}
                    name={name}
                    onChange={() => setCurrentValue(value)}
                />
                <label htmlFor={`${id}-${itemKey}`}>{value}</label>
            </li>
        );
    };

    const renderSelectItems = (arrayList: Array<any>) => {
        return arrayList.map((item) => {
            if (except && item[0] === currentValueKey) {
                return;
            }
            return setSelectItem(item[0], item[1]);
        });
    };

    return (
        <div className={`DAS-select__wrapper`}>
            <span className="DAS-select__sort">{text}</span>
            <Dropdown value={currentValue} type={type} label={label} className={className} style={style}>
                <ul className="DAS-select__container">{renderSelectItems(itemsList)}</ul>
            </Dropdown>
        </div>
    );
}
