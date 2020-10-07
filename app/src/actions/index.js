import { KEY_CLICK, SET_VALUE, SET_OPERATOR, RESET, SET_FIRST_VALUE, SET_SECOND_VALUE, SET_DISPLAY_VALUE, SET_LAST_KEY } from './actionTypes';

export const onKeyClick = key => ({
    type: KEY_CLICK,
    payload: key
});

export const setValue = value => ({
    type: SET_VALUE,
    payload: value
});

export const setOperator = operator => ({
    type: SET_OPERATOR,
    payload: operator
});

export const reset = () => ({
    type: RESET
});

export const setFirstValue = value => ({
    type: SET_FIRST_VALUE,
    payload: value
})

export const setSecondValue = value => ({
    type: SET_SECOND_VALUE,
    payload: value
})

export const setDisplayValue = value => ({
    type: SET_DISPLAY_VALUE,
    payload: value
})

export const setLastKey = value => ({
    type: SET_LAST_KEY,
    payload: value
})
