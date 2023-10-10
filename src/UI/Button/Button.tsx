import React from 'react';

import { ButtonInt } from '../../settings/interfaces';

import './Button.css';

export default function Button({
    mode = 'button',
    path = '/',
    type = 'button',
    text = '',
    size = 'middle',
    background = true,
    border = false,
    disabled = false,
    color = 'green',
    className = '',
    style = {},
    borderRadius = 'middle',
    target = '',
    insertElement,
    callback = () => {},
}: ButtonInt) {
    return (
        <>
            {mode === 'button' ? (
                <button
                    className={`
            ${'DAS-button'} 
            ${`DAS-button-${size}`} 
            ${background ? '' : 'non-background'} 
            ${disabled ? 'DAS-button-disabled' : ''} 
            ${border ? 'DAS-button-border' : ''} 
            ${`DAS-button-${color}`}
            ${className}`}
                    type={type}
                    style={style}
                    disabled={disabled}
                    onClick={callback}
                >
                    {text || insertElement}
                </button>
            ) : (
                <a
                    className={`
            ${'DAS-button'} 
            ${`DAS-button-${size}`} 
            ${background ? '' : 'non-background'} 
            ${disabled ? 'DAS-button-disabled' : ''} 
            ${`DAS-button-${color}`}
			${`DAS-button-borderRadius-${borderRadius}`}
            ${className}`}
                    style={style}
                    target={target}
                    onClick={callback}
                    href={path}
                >
                    {text}
                </a>
            )}
        </>
    );
}
