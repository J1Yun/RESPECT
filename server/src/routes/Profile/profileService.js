const ProfileDao = require('./profileDao');
const { pool } = require('../../config/database');
const baseResponse = require('../../config/baseResponseStatus');
const { response } = require('../../config/baseResponseStatus');

exports.getUserProfile = async function (userId) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const userProfile = await ProfileDao.getUserProfileInfo(connection, userId);
    return userProfile;
  } catch (err) {
    console.log(err);
  } finally {
    connection.release();
  }
};

exports.getUserInterest = async function (userId) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const userInterest = await ProfileDao.getUserInterests(connection, userId);
    return userInterest;
  } catch (err) {
    console.log(err);
  } finally {
    connection.release();
  }
};

exports.getUserTeckStack = async function (userId) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const userTeckStack = await ProfileDao.getUserTeckStacks(connection, userId);
    return userTeckStack;
  } catch (err) {
    console.log(err);
  } finally {
    connection.release();
  }
};

exports.getUserExperience = async function (userId) {
  const connection = await pool.getConnection(async (coon) => conn);
  try {
    const userExperience = await ProfileDao.getUserExperienced(connection, userId);
    return userExperience;
  } catch (err) {
    console.log(err);
  } finally {
    connection.release();
  }
};
exports.getUserEducation = async function (userId) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const userEducation = await ProfileDao.getUserEducations(connection, userId);
    return userEducation;
  } catch (err) {
  } finally {
    connection.release();
  }
};
exports.getUserProject = async function (userId) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const userProjects = await ProfileDao.getUserProjects(connection, userId);
    return userProjects;
  } catch (err) {
    console.log(err);
  } finally {
    connection.release();
  }
};
exports.getUserStudy = async function (userId) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const userStudy = await ProfileDao.getUserStudies(connection, userId);
    return userStudy;
  } catch (err) {
    console.log(err);
  } finally {
    connection.release();
  }
};
