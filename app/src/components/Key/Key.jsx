import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import classnames from 'classnames/bind';
import theme from './Key.module.css';

import { keyMode } from '../../utils/constants';

import { onKeyClick } from '../../actions';

// import reducer, { initialState } from '../../reducer';

const cx = classnames.bind(theme);

const Key = props => {
    const { value, mode, name, wide } = props;

    const dispatch = useDispatch();
    // const [state, dispatch] = useReducer(reducer, initialState);


    const handleButtonCLick = () => {
        dispatch(onKeyClick(props));
    };

    const buttonTheme = () => cx({
        key: true,
        digit: keyMode.DIGIT === mode,
        func: keyMode.FUNC === mode,
        operator: keyMode.OPERATOR === mode,
        wideKey: wide
    });
 
    return (
        <div className={buttonTheme()}>
            <button className={theme.button} onClick={handleButtonCLick}>{value}</button>
        </div>
    );
};

Key.propTypes = {
    value: PropTypes.string.isRequired,
    operator: PropTypes.string,
    mode: PropTypes.oneOf([keyMode.DIGIT, keyMode.FUNC, keyMode.OPERATOR])
};

Key.defaultProps = {
    mode: keyMode.DIGIT
};

export default Key;
