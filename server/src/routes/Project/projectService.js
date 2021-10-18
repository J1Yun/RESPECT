const ProjectDao = require('./projectDao');
const { pool } = require('../../config/database');
const baseResponse = require('../../config/baseResponseStatus');
const { response } = require('../../config/baseResponseStatus');

exports.getProjectList = async function (userId) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const getUserProjects = await ProjectDao.showProjectList(connection, userId);
    return getUserProjects;
  } catch (err) {
    console.log(err);
    return baseResponse.SERVER_CONNECT_ERROR;
  }
};
