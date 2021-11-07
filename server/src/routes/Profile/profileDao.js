const { pool } = require('../../config/database');

async function getUserProfileInfo(connection, userId) {
  const getUserInfo = `
  select U.name as name,
  U.nickname as nickname,
  U.info as info,
  U.contactPhone as phoneNumber,
  U.email as email,
  U.location as location,
  U.imageUrl as imageUrl,
  count(R.userId) as respectCount
from User U
    left join Respect R ON U.id = R.userId
where U.name =?;
    `;
  const [userProfile] = await connection.query(getUserInfo, userId);
  return userProfile;
}

async function getProfileEditUser(connection, userId) {
  const getUserProfile = `
  select name, info, contactPhone as phoneNumber, email, imageUrl
  from User u
  where name = ?;
  `;
  const [originUserProfile] = await connection.query(getUserProfile, userId);
  return originUserProfile;
}

async function getUserInterests(connection, userId) {
  const getUserInterest = `
  select IC.name as interestName
  from InterestCateogry IC
           left join Interest I on IC.id = I.interestId
           left join User U on I.userId = U.id
  where U.name = ? limit 4;
    `;
  const [userInterest] = await connection.query(getUserInterest, userId);
  return userInterest;
}

async function getUserTechStacks(connection, userId) {
  const getUserTechStack = `
  select SC.imageUrl as image, SC.name as name, S.level as level, S.isDeleted
  from StackCategory SC
         left join Stack S on SC.id = S.stackId
         left join User U on S.userId = U.id;
         where u.id = ?
  `;
  const [userTechStack] = await connection.query(getUserTechStack, userId);
  return userTechStack;
}

async function getUserExperienced(connection, userId) {
  const getUserCareer = `
  select C.name as name, C.career as career, C.start as startDate, C.end as endDate
  from Career C
           left join User U on C.userId = U.id
  where U.name = ?;
    `;
  const [userExperience] = await connection.query(getUserCareer, userId);
  return userExperience;
}

async function getUserEducations(connection, userId) {
  const getUserInstitute = `
  select I.start as startDate, I.end as endDate, I.name as name, I.department as department, I.type as type
  from Institute I
         left join User U on I.userId = U.id
  where U.name = ?;
  `;
  const [userEducation] = await connection.query(getUserInstitute, userId);
  return userEducation;
}

async function getUserProjects(connection, userId) {
  const getProjects = `
  select P.imageUrl as projectImage, P.name as projectName, P.about as about, P.start as startDate, P.end as endDate, count(P.name) as projectCount
  from Project P
         left join User U on P.userId = U.id
  where pinned = 1 and U.name = ?
  limit 3;
  `;
  const [userProjects] = await connection.query(getProjects, userId);
  return userProjects;
}

async function getUserStudies(connection, userId) {
  const getStudies = `
  select S.name as studyName, S.about as about, S.readMe as readMe
  from Study S
         left join User U on S.userId = U.id
  where U.name = ?
  limit 3;
  `;
  const [userStudy] = await connection.query(getStudies, userId);
  return userStudy;
}
async function updateProfile(connection, params) {
  const updateUserProfile = `
  update User
  set name         = ?,
      info         = ?,
      contactPhone = ?,
      email        = ?,
      location     = ?
  where name = ?;
  `;
  const updateResult = await connection.query(updateUserProfile, params);
  return updateResult;
}
async function checkExperienceContent(connection, userId) {
  const checkExperience = `
  select career
  from Career
  where userId = ?;
  `;
  const [checkResult] = await connection.query(checkExperience, userId);
  return checkResult;
}
async function updateExperienceContent(connection, content, userId) {
  const updateExperienceContents = `
  update Career 
  set career = ?
  where userId = ?
  `;
  const updateResult = await connection.query(updateExperienceContents, [content, userId]);
  return updateResult;
}

async function insertExperienceContent(connection, userId, content) {
  const insertExperienceContents = `
  insert into Career(userId, career)
  values (?, ?);
  `;
  const [insertResult] = await connection.query(insertExperienceContents, [userId, content]);
  return insertResult;
}
async function checkTechStack(connection, userId, level) {
  const isTechStack = `
  select stackId, userId, level, isDeleted
  from Stack
  where userId = ? and level = ?;
  `;
  const [checkTechStackResult] = await connection.query(isTechStack, [userId, level]);
  return checkTechStackResult;
}

async function checkStackId(connection, userId, stackId) {
  const isStackId = `
  select stackId
  from Stack
  where exists(select * from Stack where userId = ? and stackId = ?)
  `;
  const [checkStackIdResult] = await connection.query(isStackId, [userId, stackId]);
  return checkStackIdResult[0];
}

async function getStackId(connection, TechStack) {
  const getStackIdByTechStack = `
  select id
  from StackCategory
  where name = ?;
  `;
  const [stackId] = await connection.query(getStackIdByTechStack, TechStack);
  return stackId[0].id;
}

async function insertTechStack(connection, params) {
  const insertTechStackContents = `
  insert into Stack(stackId, userId, level)
  values (?, ?, ?);
  `;
  const [insertTechStackResult] = await connection.query(insertTechStackContents, params);
  return insertTechStackResult;
}
async function updateTechStack(connection, updateParams) {
  const updateTechStackContents = `
  update Stack
  set isDeleted = 0
  where stackId = ?,
        userId = ?,
  `;
  const [updateTechStackResult] = await connection.query(updateTechStackContents, updateParams);
  return updateTechStackResult;
}

module.exports = {
  getUserProfileInfo,
  getUserInterests,
  getUserTechStacks,
  getUserExperienced,
  getUserEducations,
  getUserProjects,
  getUserStudies,
  updateProfile,
  getProfileEditUser,
  checkExperienceContent,
  insertExperienceContent,
  updateExperienceContent,
  checkTechStack,
  checkStackId,
  getStackId,
  insertTechStack,
  updateTechStack,
};
