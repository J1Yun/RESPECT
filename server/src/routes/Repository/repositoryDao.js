async function selectUserId(connection) {
  const selectUserIdList = `
      SELECT userId from Project;
      `;
  const [userRows] = await connection.query(selectUserIdList);
  return userRows;
}

module.exports = {
  selectUserId,
};
