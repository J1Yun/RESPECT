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

module.exports = {
  getUserIdByNickname,
  checkPasswordByUserId,
  createUserAccount,
};
