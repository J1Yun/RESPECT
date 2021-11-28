const PoolDao = require('./poolDao');
const { pool } = require('../../config/database');
const baseResponse = require('../../config/baseResponseStatus');
const { response } = require('../../config/baseResponseStatus');

exports.get = async function () {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
  } catch (err) {
    console.log(err);
  } finally {
    connection.release();
  }
};
