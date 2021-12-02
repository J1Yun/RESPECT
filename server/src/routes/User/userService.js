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
    connection.rollback(() => {});
    return baseResponse.SERVER_CONNECT_ERROR;
  } finally {
    connection.release();
  }
};
exports.checkGithubUserAccount = async function (nickname) {
  const connection = await pool.getConnection(async conn => conn);
  try {
    const userIdRows = await UserDao.getUserIdByNickname(connection, nickname);
    if (userIdRows.length < 1) return baseResponse.SIGNIN_NICKNAME_WRONG;

    return { id: userIdRows[0].id, username: userIdRows[0].name, nickname: userIdRows[0].nickname, isSuccess: 'True' };
  } catch (err) {
    connection.rollback(() => {});
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
    connection.rollback(() => {});
    return baseResponse.SERVER_CONNECT_ERROR;
  } finally {
    connection.release();
  }
};

exports.checkUserExist = async function (nickname) {
  const connection = await pool.getConnection(async conn => conn);
  try {
    const userIdRows = await UserDao.getUserIdByNickname(connection, nickname);
    if (userIdRows.length < 1) return baseResponse.SIGNIN_NICKNAME_WRONG;
    return userIdRows;
  } catch (err) {
    connection.rollback(() => {});
    console.log(err);
    return baseResponse.SERVER_CONNECT_ERROR;
  } finally {
    connection.release();
  }
};

exports.updateSocailLogin = async function (userId) {
  const connection = await pool.getConnection(async conn => conn);
  try {
    await UserDao.updateSocialLoginByGithubId(connection, userId);
    return baseResponse.SUCCESS;
  } catch (err) {
    console.log(err);
    connection.rollback(() => {});
    return baseResponse.SERVER_CONNECT_ERROR;
  } finally {
    connection.release();
  }
};

exports.createTechStack = async function (userId, stack) {
  const connection = await pool.getConnection(async conn => conn);
  try {
    await UserDao.createTechStackByUserId(connection, userId, stack);
    return baseResponse.SUCCESS;
  } catch (err) {
    console.log(err);
    connection.rollback(() => {});
    return baseResponse.SERVER_CONNECT_ERROR;
  } finally {
    connection.release();
  }
};

exports.getLookAroundByUserId = async function (userId, interest, filter) {
  const connection = await pool.getConnection(async conn => conn);
  try {
    const userEducation = await UserDao.getUserEducationByUserId(connection, userId);
    let interestList = true;
    if (interest) {
      interestList = JSON.stringify(interest);
      interestList = interestList.replace(/[\[\]\"]/g, '');
    }
    if (filter) {
      if (filter == 'school') {
        if (userEducation) {
          const instituteList = [];
          userEducation.forEach(element => {
            if (element.type == 'I') instituteList.push(element.name);
          });
          const params = [0, instituteList, userId, interestList];
          const userList = await UserDao.getUserListByEducation(connection, params);
          return userList;
        } else return null;
      } else if (filter == 'company') {
        if (userEducation) {
          const companyList = [];
          userEducation.forEach(element => {
            if (element.type == 'C') companyList.push(element.name);
          });
          const params = [1, companyList, userId, interestList];
          const userList = await UserDao.getUserListByEducation(connection, params);
          return userList;
        } else return null;
      } else {
        const userList = await UserDao.getUserListByRespectDESC(connection, userId);
        return userList;
      }
    }
  } catch (err) {
    connection.rollback(() => {});
    console.log(err);
  } finally {
    connection.release();
  }
};

exports.createUserRespect = async function (userId, respectUserId) {
  const connection = await pool.getConnection(async conn => conn);
  try {
    const params = [userId, respectUserId];
    const respectCheck = await UserDao.checkUserRespectByUserId(connection, params);
    if (respectCheck.length > 0) {
      if (respectCheck[0].isDeleted == 1) await UserDao.updateUserRespectByUserId(connection, params);
      else await UserDao.deleteUserRespectByUserId(connection, params);
    } else await UserDao.createUserRespectByUserId(connection, params);
    return baseResponse.SUCCESS;
  } catch (err) {
    connection.rollback(() => {});
    console.log(err);
    return baseResponse.SERVER_CONNECT_ERROR;
  } finally {
    connection.release();
  }
};
