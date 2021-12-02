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
module.exports = {
  getUserIdByNickname,
  checkPasswordByUserId,
  createUserAccount,
  updateSocialLoginByGithubId,
  createTechStackByUserId,
  getUserInterestByUserId,
  getUserListByInterestId,
};
