const ProfileDao = require('./profileDao');
const { pool } = require('../../config/database');
const baseResponse = require('../../config/baseResponseStatus');
const { response } = require('../../config/baseResponseStatus');

exports.getUserProfile = async function (userId) {
  const connection = await pool.getConnection(async conn => conn);
  try {
    const userProfile = await ProfileDao.getUserProfileInfo(connection, userId);

    const userInterest = await ProfileDao.getUserInterests(connection, userId);
    const userTechStack = await ProfileDao.getUserTechStacks(connection, userId);
    const userExperience = await ProfileDao.getUserExperienced(connection, userId);
    const userEducation = await ProfileDao.getUserEducations(connection, userId);
    const userProjects = await ProfileDao.getUserProjects(connection, userId);
    const userStudy = await ProfileDao.getUserStudies(connection, userId);
    const userRespect = await ProfileDao.getUserRespect(connection, userId);
    const userProfileInfo = {
      UserProfile: userProfile,
      UserInterest: userInterest,
      UserTechStack: userTechStack,
      UserExperience: userExperience,
      UserEducation: userEducation,
      UserProjects: userProjects,
      UserStudy: userStudy,
      UserRespect: userRespect,
    };
    return userProfileInfo;
  } catch (err) {
    connection.rollback(() => {});
    console.log(err);
  } finally {
    connection.release();
  }
};

exports.userProfileUpdate = async function (userId) {
  const connection = await pool.getConnection(async conn => conn);
  try {
    const originUserProfile = await ProfileDao.getProfileEditUser(connection, userId);
    return originUserProfile;
  } catch (err) {
    console.log(err);
    connection.rollback(() => {});
    return baseResponse.SERVER_CONNECT_ERROR;
  } finally {
    connection.release();
  }
};

exports.changeUserProfile = async function (name, content, phoneNumber, email, location, name) {
  const connection = await pool.getConnection(async conn => conn);
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
    connection.rollback(() => {});
    return baseResponse.SERVER_CONNECT_ERROR;
  } finally {
    connection.release();
  }
};

exports.editExperienceContent = async function (userId, content) {
  const connection = await pool.getConnection(async conn => conn);
  try {
    const checkResult = await ProfileDao.checkExperienceContent(connection, userId);
    if (checkResult[0] == null) {
      const params = [userId, content];
      await ProfileDao.insertExperienceContent(connection, params);
    } else {
      const params = [content, userId];
      await ProfileDao.updateExperienceContent(connection, params);
    }
    return baseResponse.SUCCESS;
  } catch (err) {
    connection.rollback(() => {});
    console.log(err);
    return baseResponse.SERVER_CONNECT_ERROR;
  } finally {
    connection.release();
  }
};

exports.editAdvancedTechStackContent = async function (userId, advanced) {
  const connection = await pool.getConnection(async conn => conn);
  const checkLength = advancedTechStack.length;
  const checkAdvancedTechStack = await ProfileDao.checkTechStack(connection, advancedTechStack);
  try {
  } catch (err) {
    console.log(err);
  }
};

// exports.editExperiencedTechStackContent = async function (userId, experienced) {
//   const connection = await pool.getConnection(async (conn) => conn);
//   // findindex, find
//   try {
//     experienced.forEach(async (experiencedTechStack) => {
//       const experiencedTechStackName = experiencedTechStack.name;
//       const isDeleted = experiencedTechStack.isDeleted; // isDeleted = 0 존재 , = 1 삭제됨
//       const stackId = await ProfileDao.getStackId(connection, experiencedTechStackName);
//       const level = 'experienced';
//       const params = [stackId, userId, level];
//       const updateParams = [stackId, userId];
//       const checkExperiencedTechStack = await ProfileDao.checkTechStack(connection, userId, level);
//       if (checkExperiencedTechStack[0] == undefined) {
//         //insert
//         console.log('insert');
//       } else {
//         //update
//         console.log('update');
//       }
//     }
//   }
// }

exports.editExperiencedTechStackContent = async function (userId, advanced, experienced) {
  const connection = await pool.getConnection(async conn => conn);
  try {
    const getStacks = await ProfileDao.getUserTechStacks(connection, userId);
    let advancedStack = JSON.stringify(advanced);
    let experiencedStack = JSON.stringify(experienced);
    if (getStacks) {
      getStacks.forEach(async element => {
        if (element.stackLevel == 0) {
          if (advanced) {
            advancedStack = advancedStack.replace(/[\"\[\]]/g, '');
            const updateParams = [[advancedStack], element.stackId, userId];
            await ProfileDao.updateTechStacks(connection, updateParams);
          }
        } else {
          if (experienced) {
            experiencedStack = experiencedStack.replace(/[\"\[\]]/g, '');
            const updateParams = [[experiencedStack], element.stackId, userId];
            await ProfileDao.updateTechStacks(connection, updateParams);
          }
        }
      });
    } else {
      if (advanced) {
        advancedStack = advancedStack.replace(/[\"\[\]]/g, '');
        const advancedParams = [[advancedStack], userId, 0];
        await ProfileDao.insertTechStack(connection, advancedParams);
      }
      if (experienced) {
        experiencedStack = experiencedStack.replace(/[\"\[\]]/g, '');
        const experiencedParams = [[experiencedStack], userId, 1];
        await ProfileDao.insertTechStack(connection, experiencedParams);
      }
    }
    return baseResponse.SUCCESS;
  } catch (err) {
    connection.rollback(() => {});
    console.log(err);
    return baseResponse.SERVER_CONNECT_ERROR;
  } finally {
    connection.release();
  }
};

exports.addEducationContent = async function (userId, name, department, type, start, end) {
  const connection = await pool.getConnection(async conn => conn);
  try {
    const params = [userId, name, department, type, start, end];
    await ProfileDao.insertEducation(connection, params);
    return baseResponse.SUCCESS;
  } catch (err) {
    connection.rollback(() => {});
    console.log(err);
    return baseResponse.SERVER_CONNECT_ERROR;
  } finally {
    connection.release();
  }
};
exports.editEducationContent = async function (userId, instituteId, start, end, isDeleted) {
  const connection = await pool.getConnection(async conn => conn);
  try {
    if (isDeleted) await ProfileDao.deleteEducation(connection, instituteId);
    else {
      const params = [start, end, userId, instituteId];
      await ProfileDao.updateEducation(connection, params);
      return baseResponse.SUCCESS;
    }
  } catch (err) {
    connection.rollback(() => {});
    console.log(err);
    return baseResponse.SERVER_CONNECT_ERROR;
  } finally {
    connection.release();
  }
};

exports.editInterestContent = async function (userId, deleteInterest, insertInterest) {
  const connection = await pool.getConnection(async conn => conn);
  try {
    const insertParams = [];
    const deleteParams = [];
    if (
      insertInterest
        ? insertInterest.forEach(element => {
            insertParams.push([userId, element]);
          })
        : null
    );
    if (
      deleteInterest
        ? deleteInterest.forEach(element => {
            deleteParams.push([element]);
          })
        : null
    );
    console.log(insertParams);
    console.log(deleteParams);
    if (insertParams.length) await ProfileDao.insertInterest(connection, insertParams);
    if (deleteParams.length) await ProfileDao.deleteInterest(connection, userId, deleteParams);
    return baseResponse.SUCCESS;
  } catch (err) {
    connection.rollback(() => {});
    console.log(err);
    return baseResponse.SERVER_CONNECT_ERROR;
  } finally {
    connection.release();
  }
};
