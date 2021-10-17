const UserDao = require('./userDao');
const { pool } = require('../../config/database');
const baseResponse = require('../../config/baseResponseStatus');

const crypto = require('crypto');

exports.checkUserAccount = async function (nickname, password) {
  const connection = await pool.getConnection(async conn => conn);
  try {
    const userIdRows = await UserDao.getUserIdByNickname(connection, nickname);
    if (userIdRows.length < 1) return baseResponse.SIGNIN_NICKNAME_WRONG;

    const hashedPassword = crypto.createHash('sha512').update(password).digest('hex');

    const params = [userIdRows[0].id, hashedPassword];
    const passwordRows = await UserDao.checkPasswordByUserId(connection, params);
    if (passwordRows[0].exist)
      return { id: userIdRows[0].id, username: userIdRows[0].name, nickname: userIdRows[0].nickname, isSuccess: 'True' };
    else return baseResponse.PASSWORD_WRONG;
  } catch (err) {
    return baseResponse.SERVER_CONNECT_ERROR;
  } finally {
    connection.release();
  }
};

exports.createUser = async function (nickname, password, name) {
  const connection = await pool.getConnection(async conn => conn);
  try {
    const userIdRows = await UserDao.getUserIdByNickname(connection, nickname);

    if (userIdRows.length > 0) return baseResponse.SIGNUP_REDUNDANT_EMAIL;

    const hashedPassword = crypto.createHash('sha512').update(password).digest('hex');
    const params = [nickname, hashedPassword, name];

    const signUpResult = await UserDao.createUserAccount(connection, params);
    console.log(`회원가입 계정 : ${signUpResult[0].insertId}`);
    return baseResponse.SUCCESS;
  } catch (err) {
    console.log(err);
    return baseResponse.SERVER_CONNECT_ERROR;
  } finally {
    connection.release();
  }
};
