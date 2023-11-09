import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['but--prim', 'but--outl'];
const SIZES = ['but--med', 'but--lar'];

export const Button =({
    child, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) 
    ? buttonSize 
    : SIZES[0];

    return (
        <Link to='/sign-up' className='but-mobile'>
        <button
        className={`but ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        typeo={type}
        >
            {child}
        </button>
        </Link>
    )
};