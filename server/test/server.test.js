'use strict';

const Lab = require('@hapi/lab');
const { expect } = require('@hapi/code');
const { afterEach, beforeEach, describe, it } = exports.lab = Lab.script();
const { init } = require('../dist/server');


describe('POST /calculate', () => {
    let server;

    beforeEach(async () => {
        server = await init();
        console.log(server)
    });

    afterEach(async () => {
        await server.stop();
    });

    it('add - responds with 200', async () => {
        const res = await server.inject({
            method: 'post',
            url: '/calculate',
            payload: {
                firstValue: "5",
                secondValue: "10",
                operator: "+"
            }
        });

        expect(res.statusCode).to.equal(200);
        
    });

    it('add - responds with right result', async () => {
        const res = await server.inject({
            method: 'post',
            url: '/calculate',
            payload: {
                firstValue: "5",
                secondValue: "10",
                operator: "+"
            }
        });

        
        expect(res.result.data).to.equal('15');
    });

    
});
