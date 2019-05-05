"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _path = _interopRequireDefault(require("path"));

var _index = _interopRequireDefault(require("./routes/index.routes"));

var _technologies = _interopRequireDefault(require("./routes/technologies.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var app = (0, _express["default"])();
/* Middlewares */

app.use((0, _express.json)());
/* Settings */

app.set("port", process.env.PORT || 3000);
app.set('views', _path["default"].join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'public')));
/* Routes */

app.use(_index["default"]);
app.use('/technologies', _technologies["default"]);
var _default = app;
exports["default"] = _default;