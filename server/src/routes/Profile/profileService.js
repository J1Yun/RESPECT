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

exports.userProfileUpdate = async function (userId) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const originUserProfile = await ProfileDao.getProfileEditUser(connection, userId);
    return originUserProfile;
  } catch (err) {
    console.log(err);
  } finally {
    connection.release();
  }
};

exports.changeUserProfile = async function (name, content, phoneNumber, email, location, name) {
  const connection = await pool.getConnection(async (conn) => conn);
  const params = [name, content, phoneNumber, email, location, name];
  try {
    const updateResult = await ProfileDao.updateProfile(connection, params);
    if (updateResult) {
      return baseResponse.SUCCESS;
    } else {
      return baseResponse.SERVER_CONNECT_ERROR;
    }
  } catch (err) {
    console.log(err);
  }
};

exports.editExperienceContent = async function (userId, content) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const checkResult = await ProfileDao.checkExperienceContent(connection, userId);
    console.log(checkResult[0]);
    if (checkResult[0] == null) {
      const insertResult = await ProfileDao.insertExperienceContent(connection, userId, content);
      console.log('insert');
      if (insertResult) {
        return baseResponse.SUCCESS;
      } else {
        return baseResponse.SERVER_CONNECT_ERROR;
      }
    } else {
      //const params = [content, userId]
      const updateResult = await ProfileDao.updateExperienceContent(connection, content, userId);
      console.log('upadte');
      if (updateResult) {
        return baseResponse.SUCCESS;
      } else {
        return baseResponse.SERVER_CONNECT_ERROR;
      }
    }
  } catch (err) {
    console.log(err);
  } finally {
    connection.release();
  }
};

exports.editAdvancedTechStackContent = async function (userId, advancedTechStack) {
  const connection = await pool.getConnection(async (conn) => conn);
  const checkLength = advancedTechStack.length;
  const checkAdvancedTechStack = await ProfileDao.checkTeckStack(connection, advancedTechStack);
  try {
  } catch (err) {
    console.log(err);
  }
};

exports.editExperiencedTechStackContent = async function (userId, experiencedTeckStack) {
  const connection = await pool.getConnection(async (conn) => conn);
  const checkExperiencedTechStack = await ProfileDao.checkTeckStack(connection, experiencedTeckStack);
  for (i = 0; i < experiencedTeckStack.length; i++) {
    const stackId = await ProfileDao.getStackId(connection, experiencedTeckStack[i]);
    const params = [stackId, userId, experiencedTeckStack[i]];
    const insertExperiencedTeckStackResult = await ProfileDao.insertExperiencedTeckStack(connection, params);
    return insertExperiencedTeckStackResult;
  }
};
