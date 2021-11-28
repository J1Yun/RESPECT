const PoolService = require('./poolService');
const baseResponse = require('../../config/baseResponseStatus');
const { response } = require('../../config/baseResponseStatus');

exports.getUserList = async function (req, res) {
  const sort = req.params.sort;
  const filter = req.params.filter;
  if (sort == 'respect' && filter == 'ready') {
    const userList = await PoolService.getUserListByRespect(sort);
    return userList;
  } else if (sort == 'project') {
    const userList = await PoolService.getUserListByProject(sort);
    return userList;
  } else {
    const userList = await PoolService.getAllUserList();
    return userList;
  }
};
