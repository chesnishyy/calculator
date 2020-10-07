export const keyMode = {
    DIGIT: 'digit',
    OPERATOR: 'operator',
    FUNC: 'func'
};
// TODO: add clear button
export const keys = [
    [
        {
            name: 'reset',
            value: 'AC',
            mode: keyMode.FUNC,
        },
        {
            name: 'negate',
            value: '±',
            mode: keyMode.FUNC,
        },
        {
            name: 'percent',
            value: '%',
            mode: keyMode.FUNC,
        },
        {
            name: 'devide',
            value: '÷',
            mode: keyMode.OPERATOR,
        }
    ],
    [
        {
            value: '7',
            mode: keyMode.DIGIT,
        },
        {
            value: '8',
            mode: keyMode.DIGIT,
        },
        {
            value: '9',
            mode: keyMode.DIGIT,
        },
        {
            name: 'multiply',
            value: '×',
            mode: keyMode.OPERATOR,
        }
    ],
    [
        {
            value: '4',
            mode: keyMode.DIGIT,
        },
        {
            value: '5',
            mode: keyMode.DIGIT,
        },
        {
            value: '6',
            mode: keyMode.DIGIT,
        },
        {
            name: 'subtract',
            value: '-',
            mode: keyMode.OPERATOR,
        }
    ],
    [
        {
            value: '1',
            mode: keyMode.DIGIT,
        },
        {
            value: '2',
            mode: keyMode.DIGIT,
        },
        {
            value: '3',
            mode: keyMode.DIGIT,
        },
        {
            name: 'add',
            value: '+',
            mode: keyMode.OPERATOR,
        }
    ],
    [
        {
            wide: true,
            value: '0',
            mode: keyMode.DIGIT,
        },
        {
            name: 'dot',
            value: '.',
            type: '',
        },
        {
            name: 'equal',
            value: '=',
            mode: keyMode.OPERATOR,
        }
    ]
];

// export const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]