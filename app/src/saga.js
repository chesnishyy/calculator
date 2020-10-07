import APIMethods from './api';
import { call, select, takeEvery, put } from 'redux-saga/effects'; 
import { KEY_CLICK } from './actions/actionTypes';
import { setValue, reset, setOperator, setFirstValue, setDisplayValue, setSecondValue, setLastKey } from './actions';

const operators = {
    reset: 'AC',
    clear: 'C',
    sign: '±',
    percent: '%',
    divide: '÷',
    multiply: '×',
    subtract: '-',
    add: '+',
    equal: '='
};

const dataSelector = state => state;

const isDigit = value => {
    return value === '.' || !isNaN(value);
}

const isOperator = value => {
    return Object.values(operators).includes(value);
}

const isFloat = value => value.includes('.');

function* keyClickHandler({ payload: { value } }) {
    if (isDigit(value)) yield call(handleDigitKey, value);

    if (isOperator(value)) yield call(handleOperatorKey, value);

    yield put(setLastKey(value))
}

function* handleDigitKey(value) {
    const { displayValue, operator, firstValue } = yield select(dataSelector);

    if (value === '.' && isFloat(displayValue)) return;

    if (firstValue === displayValue) {
        if (!operator) yield put(setFirstValue(null));

        yield put(setDisplayValue(value));
        return;
    }

    yield put(setValue(value));
}

function* handleOperatorKey(value) {
    if (
        value === operators.add ||
        value === operators.subtract ||
        value === operators.multiply ||
        value === operators.divide
    ) {
        yield call(basicOperatorsHandler, value);
    }

    if (value === operators.percent) yield call(percentHandler, value);

    if (value === operators.sign) yield call(signHandler, value)

    if (value === operators.equal) yield call(equalHandler, value);

    if (value === operators.clear) yield call(clearHandler);

    if (value === operators.reset) yield put(reset());
}

function* basicOperatorsHandler(value) {
    const { firstValue, displayValue, lastKey } = yield select(dataSelector);

    if (firstValue) {
        yield put(setOperator(value));

        if (isOperator(lastKey)) return;
        
        yield put(setSecondValue(displayValue));
        yield call(calculationRequest, value);

        return;
    }

    if (!firstValue) yield put(setFirstValue(displayValue));
    
    yield put(setOperator(value));

    
}

function* percentHandler(value) {
    const { firstValue, displayValue } = yield select(dataSelector);

    yield put(setOperator(value));

    if (displayValue === '0') return;
    if (!firstValue) yield put(setFirstValue(displayValue));

    yield call(calculationRequest)
}

function* signHandler(value) {
    const { firstValue, displayValue } = yield select(dataSelector);

    yield put(setOperator(value));

    if (displayValue === '0') return;
    if (!firstValue) yield put(setFirstValue(displayValue));

    yield call(calculationRequest)
}

function* equalHandler() {
    const { displayValue, firstValue, operator } = yield select(dataSelector);

    if (!firstValue || !operator) return;

    yield put(setSecondValue(displayValue));

    yield call(calculationRequest);
}

// TODO: Implement this later
function* clearHandler() {}


function* calculationRequest(value) {
    const { displayValue, ...requestData } = yield select(dataSelector); 

    if (!requestData.operator || !requestData.firstValue) return;


    try {
        const { data } = yield call(APIMethods.post, '/calculate', { data: requestData });
 
        yield put(setDisplayValue(data ? data : 'Error'));
        yield put(setFirstValue(data));
        yield put(setSecondValue(null));
        yield put(setOperator(isOperator(value) ? value : null));

    } catch(error) {
        console.log(error);
    }
}

export default function* sagaWatcher() {
    yield takeEvery(KEY_CLICK, keyClickHandler);
}