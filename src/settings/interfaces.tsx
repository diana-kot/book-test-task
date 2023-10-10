import { Dispatch, SetStateAction, CSSProperties } from 'react';

export interface FormInt {
    id?: string; //id поля из формика
    name?: string; //name поля из формика
    form?: {
        // объект формы
        errors: object;
        touched: object;
        handleChange: any;
        values: any;
        validateForm: any;
    };
    error?: boolean; //Показать ошибку в компоненте
}

export interface IInputSearch {
    placeholder: string;
    inputValue: string;
    setInputValue: Dispatch<SetStateAction<string>>;
    handleChangeSearch: () => void;
}

export interface MainLayoutInt {
    children: JSX.Element;
    title?: string; //seo title
    description?: string; //seo description
    enableFooter?: boolean;
}

export interface StylesClassInt {
    className?: string; //Доп класс
    style?: CSSProperties | undefined; //Доп стили
}

export type DAS_symbols = '.' | '/' | '-';

export type ButtonSizeTypes = 'small' | 'middle' | 'large' | 'xlarge';
export type ButtonColorTypes = 'green' | 'beige';
export type ButtonModeTypes = 'button' | 'link';
export type ButtonBorderRadiusypes = 'small' | 'middle' | 'large';
export interface ButtonInt extends StylesClassInt {
    mode?: ButtonModeTypes;
    path?: string;
    border?: boolean; //Включить border
    type?: any; //Тип
    text?: JSX.Element | string; //Текст
    size?: ButtonSizeTypes; //Размер
    background?: boolean; //Включить background
    disabled?: boolean; //Отключить кнопку
    callback?: () => void; //callback при нажатии
    insertElement?: JSX.Element; //Вставить ноду в кнопку
    color?: ButtonColorTypes;
    target?: string;
    borderRadius?: ButtonBorderRadiusypes;
}

export type SelectStateInt = string | number | undefined;

//Типы dropdown
type dropdownTypes =
    | 'select' //Select
    | 'dropdown' //Dropdown
    | 'multi'; //Multi select
export interface dropdownInt extends StylesClassInt {
    children?: JSX.Element;
    type?: dropdownTypes; //Тип dropdown
    value?: string | number; //Название выбора в шапке компонента
    label?: string | null; //Лейбл компонента
}
export interface SelectInt extends dropdownInt, FormInt {
    items: object; //Объект со значениями
    id: string; //id поля из формика
    name: string; //name поля из формика
    except?: boolean; //Исключить выбранный элемент из общего списка элементов
    selectedItemKey?: string | number | undefined; //Ключ выбранного по дефолту элемента
    callback?: any;
    text?: string;
}
