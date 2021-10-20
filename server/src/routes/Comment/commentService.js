const CommentDao = require('./commentDao');
const baseResponse = require('../../config/baseResponseStatus');
const { response } = require('../../config/baseResponseStatus');
const { pool } = require('../../config/database');

exports.getAllComments = async function (projectId) {
  const connection = await pool.getConnection((conn) => conn);
  try {
    console.log(projectId);
    const projectComments = await CommentDao.getProjectComments(connection, projectId);
    return projectComments;
  } catch (err) {
    console.log(err);
  }
};
