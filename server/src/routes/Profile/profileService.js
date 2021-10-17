const profileDao = require('./profileDao');
const { pool } = require('../../config/database');
const baseResponse = require('../../config/baseResponseStatus');
const { response } = require('../../config/baseResponseStatus');

exports.getUserProfile = async function (userId) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const userProfile = await profileDao.getUserProfileInfo(connection, userId);
    return userProfile;
  } catch (err) {
    console.log(err);
  }
};

exports.getInterest = async function (userId) {};
