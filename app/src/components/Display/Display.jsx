import React from 'react';
import { useSelector } from 'react-redux';
import theme from './Display.module.css';

const Display = () => {
    const value = useSelector(state => state.displayValue);

    

    return (
        <div className={theme.container}>
            {value}
        </div>
    );
};

export default Display;
