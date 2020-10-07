'use strict';

require("regenerator-runtime/runtime");

var _hapi = require("@hapi/hapi");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var init = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var server;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            server = (0, _hapi.Server)({
              port: 8080,
              host: '0.0.0.0'
            });
            server.route({
              method: 'POST',
              path: '/add',
              handler: function handler(request, h) {
                var payload = request.payload;
                return {
                  data: payload.a + payload.b
                };
              }
            });
            server.route({
              method: 'POST',
              path: '/substract',
              handler: function handler(request, h) {
                var payload = request.payload;
                return {
                  data: payload.a - payload.b
                };
              }
            });
            server.route({
              method: 'POST',
              path: '/multiply',
              handler: function handler(request, h) {
                var payload = request.payload;
                return {
                  data: payload.a * payload.b
                };
              }
            });
            server.route({
              method: 'POST',
              path: '/devide',
              handler: function handler(request, h) {
                var payload = request.payload;
                return {
                  data: payload.a / payload.b
                };
              }
            });
            server.route({
              method: 'POST',
              path: '/percent',
              handler: function handler(request, h) {
                var payload = request.payload;
                return {
                  data: payload.a / 100
                };
              }
            });
            server.route({
              method: '*',
              path: '/{any*}',
              handler: function handler(request, h) {
                return '404 Error! Page Not Found!';
              }
            });
            _context.next = 9;
            return server.start();

          case 9:
            console.log('Server running on %s', server.info.uri);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init() {
    return _ref.apply(this, arguments);
  };
}();

process.on('unhandledRejection', function (err) {
  console.log(err);
  process.exit(1);
});
init();