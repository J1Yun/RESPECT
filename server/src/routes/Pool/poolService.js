const PoolDao = require('./poolDao');
const { pool } = require('../../config/database');
const baseResponse = require('../../config/baseResponseStatus');
const { response } = require('../../config/baseResponseStatus');

exports.getPoolByUserId = async function (userId, interests, filter) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
  } catch (err) {
    console.log(err);
  } finally {
    connection.release();
  }
};
