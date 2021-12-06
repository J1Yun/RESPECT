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
  } finally {
    connection.release();
  }
};
exports.retrieveProjectByProjectId = async function (userId, projectId) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const retrieveProject = await ProjectDao.retrieveProject(connection, userId, projectId);
    return retrieveProject;
  } catch (err) {
    console.log(err);
    return baseResponse.SERVER_CONNECT_ERROR;
  } finally {
    connection.release();
  }
};

exports.getProjectComment = async function (userId, projectId) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const commentList = await ProjectDao.projectCommentList(connection, userId, projectId);
    return commentList;
  } catch (err) {
    console.log(err);
    return baseResponse.SERVER_CONNECT_ERROR;
  } finally {
    connection.release();
  }
};
