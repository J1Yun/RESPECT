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

exports.getUserTechStack = async function (userId) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const userTechStack = await ProfileDao.getUserTechStacks(connection, userId);
    return userTechStack;
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

exports.editAdvancedTechStackContent = async function (userId, advanced) {
  const connection = await pool.getConnection(async (conn) => conn);
  const checkLength = advancedTechStack.length;
  const checkAdvancedTechStack = await ProfileDao.checkTechStack(connection, advancedTechStack);
  try {
  } catch (err) {
    console.log(err);
  }
};

exports.editExperiencedTechStackContent = async function (userId, experienced) {
  const connection = await pool.getConnection(async (conn) => conn);

  try {
    experienced.forEach(async (experiencedTechStack) => {
      const experiencedTechStackName = experiencedTechStack.name;
      const stackId = await ProfileDao.getStackId(connection, experiencedTechStackName);
      const level = 'experienced';
      const params = [stackId, userId, level];
      const updateParams = [stackId, userId];
      const checkExperiencedTechStack = await ProfileDao.checkTechStack(connection, userId, level);
      if (checkExperiencedTechStack[0] == undefined) {
        //insert
        console.log('hello');
      } else {
      }
      checkExperiencedTechStack.forEach(async (stack) => {
        const checkStackIdResult = await ProfileDao.checkStackId(connection, userId, stackId);
        // 유저의 stackId가 존재하고 isDeleted = 0 일 때 이미 등록되어 있다.
        if (checkStackIdResult && stack.isDeleted == 0) {
          console.log('already exists');
          return;
        } else if (checkStackIdResult && stack.isDeleted == 1) {
          // 존재했었다가 삭제되었을 경우
          console.log('update');
          const updateExperiencedTechStackResult = await ProfileDao.updateTechStack(connection, updateParams);
          return updateExperiencedTechStackResult;
        } else if (checkStackIdResult == undefined && stack.isDeleted == 0) {
          console.log('insert');
          const insertExperiencedTechStackResult = await ProfileDao.insertTechStack(connection, params);
          return insertExperiencedTechStackResult;
        } else {
          console.log('test');
          return baseResponse.EMAIL_ERROR_TYPE;
        }
      });
    });
    return baseResponse.SUCCESS;
  } catch (err) {
    console.log(err);
  } finally {
    connection.release();
  }
};
