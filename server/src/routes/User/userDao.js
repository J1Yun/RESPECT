async function getUserIdByNickname(connection, nickname) {
  const getUserId = `
        SELECT id,nickname,name FROM User WHERE nickname=? and isDeleted=0;
        `;
  const [userIdRows] = await connection.query(getUserId, nickname);
  return userIdRows;
}
async function checkPasswordByUserId(connection, params) {
  const getUserPassword = `
          SELECT exists (SELECT id FROM User WHERE id=? and password=? and isDeleted=0) as exist;
          `;
  const [userPasswordRows] = await connection.query(getUserPassword, params);
  return userPasswordRows;
}
async function createUserAccount(connection, params) {
  const insertUserAccount = `
        INSERT INTO User(nickname, password, name)
        VALUES (?, ?, ?);
    `;
  const UserAccountResult = await connection.query(insertUserAccount, params);
  return UserAccountResult;
}
async function updateSocialLoginByGithubId(connection, userId) {
  const updateUserSocialLogin = `
        UPDATE User SET isSocialLogin = 1 WHERE id = ?;
`;
  const UserSocialLoginResult = await connection.query(updateUserSocialLogin, userId);
  return UserSocialLoginResult;
}
async function createTechStackByUserId(connection, userId, stack) {
  const createTechStack = `
        INSERT INTO User(userId, stack)
        VALUES (?, ?);
`;
  const CreateTechStackResult = await connection.query(createTechStack, [userId, stack]);
  return CreateTechStackResult;
}
async function getUserInterestByUserId(connection, userId) {
  const getUserInterest = `
          SELECT interestId
          FROM Interest
          WHERE userId = ? and isDeleted = 0;
          `;
  const [userInterestRows] = await connection.query(getUserInterest, userId);
  return userInterestRows;
}
async function getUserListByInterestId(connection, params) {
  const getUserInterest = `
          SELECT u.id userId, u.nickname, u.name, u.email, u.contactPhone, u.imageUrl, u.location
          FROM User u JOIN Interest i ON u.id = i.userId
          WHERE i.interestId in (?) and u.isDeleted = 0 and u.id != ?
          GROUP BY u.id;
          `;
  const [userInterestRows] = await connection.query(getUserInterest, params);
  return userInterestRows;
}
async function getUserEducationByUserId(connection, params) {
  const getUserInterest = `
          SELECT userId, name, type
          FROM Institute
          WHERE userId = ? and isDeleted = 0;
          `;
  const [userInterestRows] = await connection.query(getUserInterest, params);
  return userInterestRows;
}
async function getUserListByEducation(connection, params) {
  const getUserList = `
          SELECT u.id, u.name userName,u.nickname,
	               case when resp.cnt is null then 0 else resp.cnt end as respect, 
                 case when it.name is null then '-' else it.name end as instituteName,
                 case when u.location is null then '-' else u.location end as userAddress,
                 case when ic.interest is null then '-' else ic.interest end as userInterest,
                 case when s.stack is null then '-' else s.stack end as userStack
          FROM User u Left Join Institute it On u.id = it.userId
                      Left Join ( Select userId, group_concat(name) interest, group_concat(ic.id) interestId
				                          From Interest i Join InterestCategory ic On ic.id = i.interestId
				                          Group By userId) ic On ic.userId = u.id
                      Left Join ( Select stack, userId From Stack s Where s.level = ?) s on s.userId = u.id
	                    Left Join ( Select respectUserId, count(respectUserId) cnt From Respect Group By respectUserId ) resp On resp.respectUserId = u.id
          WHERE it.name in (?) and u.id != ? and u.isDeleted = 0 and ic.interestId in (?);
          `;
  const [userListRows] = await connection.query(getUserList, params);
  return userListRows;
}
async function getUserListByRespectDESC(connection, userId) {
  const getUserInterest = `
          SELECT u.id, u.name userName,u.nickname,
	               case when resp.cnt is null then 0 else resp.cnt end as respect, 
                 case when it.name is null then '-' else it.name end as instituteName,
                 case when u.location is null then '-' else u.location end as userAddress,
                 case when ic.interest is null then '-' else ic.interest end as userInterest,
                 case when s.stack is null then '-' else s.stack end as userStack
          FROM User u Left Join Institute it On u.id = it.userId
                      Left Join ( Select userId, group_concat(name) interest, group_concat(ic.id) interestId
				                          From Interest i Join InterestCategory ic On ic.id = i.interestId
				                          Group By userId) ic On ic.userId = u.id
                      Left Join ( Select stack, userId From Stack s Where s.level = 0) s on s.userId = u.id
	                    Left Join ( Select respectUserId, count(respectUserId) cnt From Respect Group By respectUserId ) resp On resp.respectUserId = u.id
          WHERE u.id != ? and u.isDeleted = 0 and ic.interestId in (?)
          ORDER BY respect DESC;
          `;
  const [userInterestRows] = await connection.query(getUserInterest, userId);
  return userInterestRows;
}
async function checkUserRespectByUserId(connection, params) {
  const getUserRespect = `
          SELECT userId, isDeleted FROM Respect WHERE userId = ? and respectUserId = ?;
          `;
  const [userRespectRows] = await connection.query(getUserRespect, params);
  return userRespectRows;
}
async function updateUserRespectByUserId(connection, params) {
  const updateUserRespect = `
          UPDATE Respect SET isDeleted = 0 WHERE userId = ? and respectUserID = ?;
          `;
  const [userRespectRows] = await connection.query(updateUserRespect, params);
  return userRespectRows;
}
async function deleteUserRespectByUserId(connection, params) {
  const deleteUserRespect = `
          UPDATE Respect SET isDeleted = 1 WHERE userId = ? and respectUserId = ?;
          `;
  const [userRespectRows] = await connection.query(deleteUserRespect, params);
  return userRespectRows;
}
async function createUserRespectByUserId(connection, params) {
  const deleteUserRespect = `
          INSERT INTO Respect(userId, respectUserId) VALUES (?,?);
          `;
  const [userRespectRows] = await connection.query(deleteUserRespect, params);
  return userRespectRows;
}
module.exports = {
  getUserIdByNickname,
  checkPasswordByUserId,
  createUserAccount,
  updateSocialLoginByGithubId,
  createTechStackByUserId,
  getUserInterestByUserId,
  getUserListByInterestId,
  getUserEducationByUserId,
  getUserListByEducation,
  getUserListByRespectDESC,
  checkUserRespectByUserId,
  updateUserRespectByUserId,
  deleteUserRespectByUserId,
  createUserRespectByUserId,
};
