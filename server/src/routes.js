import Joi from 'joi';
import { operatorHandlers, operators } from './routeHandlers';

export default [
    {
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
    },
    {
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
    },
    {
        method: 'POST',
        path: '/subtract',
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
        method: '*',
        path: '/{any*}',
        handler: function (request, h) {
    
            return '404 Error! Page Not Found!';
        }
    }
];