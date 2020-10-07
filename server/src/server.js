'use strict';

import 'regenerator-runtime/runtime';
import { Server } from '@hapi/hapi';
import Joi from 'joi';

const operators = {
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

const operatorHandlers = {
    add,
    subtract,
    muliply,
    divide,
    percent,
    sign
};

const init = async () => {

    const server = Server({
        port: 8080,
        host: 'localhost',
        debug: { request: ['error'] }
    });

    server.route({
        method: 'POST',
        path: '/calculate',
        handler: function (request, h) {
    
            const { payload: { operator, firstValue, secondValue } } = request;

            switch(operator){
                case operators.add:
                    return { data: operatorHandlers.add(firstValue, secondValue) };
                case operators.subtract:
                    return { data: operatorHandlers.subtract(firstValue, secondValue) };
                case operators.multiply:
                    return { data: operatorHandlers.muliply(firstValue, secondValue) };
                case operators.divide:
                    const res =  operatorHandlers.divide(firstValue, secondValue);

                    return { data: isFinite(res) ? res : 'NaN' }
                case operators.percent:
                    return { data: operatorHandlers.percent(firstValue) };
                case operators.sign:
                    return { data: operatorHandlers.sign(firstValue) };
            }

            return h.response('Error').code(400);
        }
    });



    server.route({
        method: 'POST',
        path: '/add',
        handler: function (request, h) {
    
            const { payload: { firstValue, secondValue } } = request;

            return { data: operatorHandlers.add(firstValue, secondValue) };
        },
        options: {
            validate: {
                payload: Joi.object({
                    firstValue: Joi.string().required(),
                    secondValue: Joi.string().required()
                })
            }
        },
    });

    server.route({
        method: 'POST',
        path: '/substract',
        handler: function (request, h) {
    
            const { payload: { firstValue, secondValue } } = request;

            return { data: operatorHandlers.subtract(firstValue, secondValue) };
        },
        options: {
            validate: {
                payload: Joi.object({
                    firstValue: Joi.string().required(),
                    secondValue: Joi.string().required()
                })
            }
        },
    });

    server.route({
        method: 'POST',
        path: '/multiply',
        handler: function (request, h) {
    
            const { payload: { firstValue, secondValue } } = request;

            return { data: operatorHandlers.muliply(firstValue, secondValue) };
        },
        options: {
            validate: {
                payload: Joi.object({
                    firstValue: Joi.string().required(),
                    secondValue: Joi.string().required()
                })
            }
        },
    });

    server.route({
        method: 'POST',
        path: '/devide',
        handler: function (request, h) {
            const { payload: { firstValue, secondValue } } = request;
            const result = operatorHandlers.divide(firstValue, secondValue);

            return { data: isFinite(result) ? result : 'Not a number' };
        },
        options: {
            validate: {
                payload: Joi.object({
                    firstValue: Joi.string().required(),
                    secondValue: Joi.string().required()
                })
            }
        },
    });

    server.route({
        method: 'POST',
        path: '/percent',
        handler: function (request, h) {
    
            const { payload: { firstValue } } = request;

            return { data: operatorHandlers.percent(firstValue) };
        },
        options: {
            validate: {
                payload: Joi.object({
                    firstValue: Joi.string().required()
                })
            }
        }
    });

    server.route({
        method: 'POST',
        path: '/sign',
        handler: function (request, h) {
    
            const { payload: { firstValue } } = request;

            return { data: operatorHandlers.sign(firstValue) };
        },
        options: {
            validate: {
                payload: Joi.object({
                    firstValue: Joi.string().required()
                })
            }
        }
    });

    server.route({
        method: '*',
        path: '/{any*}',
        handler: function (request, h) {

            return '404 Error! Page Not Found!';
        }
    });



    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});




init();