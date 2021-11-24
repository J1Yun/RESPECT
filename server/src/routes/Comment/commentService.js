const CommentDao = require('./commentDao');
const baseResponse = require('../../config/baseResponseStatus');
const { response } = require('../../config/baseResponseStatus');
const { pool } = require('../../config/database');

exports.getAllComments = async function (projectId) {
  const connection = await pool.getConnection((conn) => conn);
  try {
    const resultComments = await CommentDao.getProjectComments(connection, projectId);
    return resultComments;
  } catch (err) {
    console.log(err);
  } finally {
    connection.release();
  }
};
exports.putComment = async function (userId, projectId, comments) {
  const connection = await pool.getConnection((conn) => conn);
  const params = [userId, projectId, comments];
  try {
    const resultComments = await CommentDao.insertProjectComment(connection, params);
    //console.log(`댓글 상태 : ${resultComments[0].affectedRows}`);
    return baseResponse.SUCCESS;
  } catch (err) {
    console.log(err);
  } finally {
    connection.release();
  }
};
