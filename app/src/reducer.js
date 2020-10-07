import {
    SET_VALUE,
    RESET,
    SET_OPERATOR,
    SET_SECOND_VALUE,
    SET_FIRST_VALUE,
    SET_DISPLAY_VALUE,
    SET_LAST_KEY
} from './actions/actionTypes.js';

export const initialState = {
    displayValue: '0',
    firstValue: null,
    secondValue: null,
    operator: null,
    lastKey: null
};

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case SET_VALUE:
            const displayValue = state.displayValue === initialState.displayValue && payload !== '.' 
            ? payload 
            : state.displayValue.concat(payload);

            return {
                ...state,
                displayValue
            };

         case SET_DISPLAY_VALUE:
             return {
                 ...state,
                 displayValue: payload
             }

        case SET_FIRST_VALUE: 
            return {
                ...state,
                firstValue: payload
            };

         case SET_SECOND_VALUE:
             return {
                 ...state,
                 secondValue: payload
             };

         case SET_OPERATOR:
             return {
                 ...state,
                 operator: payload
             };
         
         case SET_LAST_KEY:
             return {
                 ...state,
                 lastKey: payload
             };

        case RESET:
            return initialState;
        
        default:
            return state;
    }
}