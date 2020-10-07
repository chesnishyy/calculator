
export const operators = {
    sign: '±',
    percent: '%',
    divide: '÷',
    multiply: '×',
    subtract: '-',
    add: '+',
};

const add = (firstValue, secondValue) => {
    return (parseFloat(firstValue) + parseFloat(secondValue)).toString();
  }

const subtract = (firstValue, secondValue) => {
    return (parseFloat(firstValue) - parseFloat(secondValue)).toString();
}

const muliply = (firstValue, secondValue) => {
    return (parseFloat(firstValue) * parseFloat(secondValue)).toString();
}

const divide = (firstValue, secondValue) => {
    return (parseFloat(firstValue) / parseFloat(secondValue)).toString();
}

const percent = value => {
    return (parseFloat(value) / 100).toString();
}

const sign = value => {
    return parseFloat(value) === 0 ? '0' : (parseFloat(value) * -1).toString();
}

export const operatorHandlers = {
    add,
    subtract,
    muliply,
    divide,
    percent,
    sign
};