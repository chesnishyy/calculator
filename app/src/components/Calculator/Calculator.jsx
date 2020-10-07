import React from 'react';
import Display from '../Display';
import Keypad from '../Keypad';
import theme from './Calcuator.module.css';

const Calculator = (props) => {
    console.log(props)
    return (
        <div className={theme.container}>
            <Display />
            <Keypad />
        </div>
    );
};

export default Calculator;