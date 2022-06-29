"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const PORT = process.env.PORT || 3740

_app2.default.listen(PORT, () =>  console.log(`Server is running on port ${PORT} 🚀`))