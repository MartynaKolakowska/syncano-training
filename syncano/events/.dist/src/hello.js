'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require('@syncano/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async ctx => {
  const { response, data } = new _core2.default(ctx);
  const book = await data.book.create({
    title: 'Godfather',
    author: 5,
    publish_date: new Date(),
    categories: [1, 2]
  });

  response.json(book);
};