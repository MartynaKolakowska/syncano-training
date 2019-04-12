'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _core = require('@syncano/core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async ctx => {
    const { response, data } = new _core2.default(ctx);
    //   let obj = JSON.parse(ctx.args.item)
    console.log(ctx.args);
    const task = await data.task.delete(ctx.args.id);
    //response.json(task)
};