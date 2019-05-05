"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _mongodb = require("mongodb");

var _connection = require("../database/connection");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = (0, _express.Router)();
/* Get All Technologies*/

router.get("/",
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var database, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _connection.connect)();

          case 3:
            database = _context.sent;
            _context.next = 6;
            return database.collection("technologies").find().toArray();

          case 6:
            result = _context.sent;
            console.log(result);
            res.json(result);
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
/* Get One Technologie */

router.get("/:id",
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var id, database, result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return (0, _connection.connect)();

          case 4:
            database = _context2.sent;
            _context2.next = 7;
            return database.collection("technologies").findOne({
              _id: (0, _mongodb.ObjectID)(id)
            });

          case 7:
            result = _context2.sent;
            console.log(result);
            res.json(result);
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 12]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
/* Post Technologie */

router.post("/",
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var database, technologie, result;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0, _connection.connect)();

          case 3:
            database = _context3.sent;
            technologie = {
              name: req.body.name,
              like: req.body.like,
              info: {
                experience: req.body.info.experience,
                description: req.body.info.description
              }
            };
            _context3.next = 7;
            return database.collection("technologies").insertOne(technologie);

          case 7:
            result = _context3.sent;
            console.log({
              message: "Technologie ".concat(req.body.name, " created"),
              result: result.ops[0]
            });
            res.json({
              message: "Technologie ".concat(req.body.name, " created"),
              result: result.ops[0]
            });
            _context3.next = 15;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 12]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
/* Put (Update) Technologie */

router.put("/:id",
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id, technologie_update, database, result;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            technologie_update = {
              name: req.body.name,
              like: req.body.like,
              info: {
                experience: req.body.info.experience,
                description: req.body.info.description
              }
            };
            _context4.next = 5;
            return (0, _connection.connect)();

          case 5:
            database = _context4.sent;
            _context4.next = 8;
            return database.collection("technologies").updateOne({
              _id: (0, _mongodb.ObjectID)(id)
            }, {
              $set: technologie_update
            });

          case 8:
            result = _context4.sent;
            console.log({
              message: "Technologie with id: ".concat(id, " updated"),
              result: result
            });
            res.json({
              message: "Technologie with id: ".concat(id, " updated"),
              result: result
            });
            _context4.next = 16;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 13]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
/* Delete Technologie */

router["delete"]("/:id",
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id, database, result;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return (0, _connection.connect)();

          case 4:
            database = _context5.sent;
            _context5.next = 7;
            return database.collection("technologies").deleteOne({
              _id: (0, _mongodb.ObjectID)(id)
            });

          case 7:
            result = _context5.sent;
            console.log({
              message: "Technologie with id: ".concat(id, " deleted"),
              result: result
            });
            res.json({
              message: "Technologie with id: ".concat(id, " deleted"),
              result: result
            });
            _context5.next = 15;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 12]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;