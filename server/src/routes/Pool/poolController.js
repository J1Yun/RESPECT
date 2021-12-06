const PoolService = require('./poolService');
const baseResponse = require('../../config/baseResponseStatus');
const { response } = require('../../config/baseResponseStatus');

exports.getUserList = async function (req, res) {
  const userId = req.params.userId;
  const { interests } = req.body;
  const { filter } = req.query;
  const poolResult = await PoolService.getPoolByUserId(userId, interests, filter);
  return res.send(poolResult);
};
