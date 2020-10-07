import React from 'react';
import Key from '../Key';
import theme from './Keypad.module.css';
import { keys } from '../../utils/constants';

const Keypad = () => {
    const renderKeyRow = keyRow => (
        <div className={theme.keyRow}>
            {keyRow.map(key => <Key { ...key } />)}
        </div>
    );

    return (
        <div className={theme.container}>
            {keys.map(keyRow => renderKeyRow(keyRow))}
        </div>
    );
};

export default Keypad;