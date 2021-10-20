async function getProjectComments(connection, projectId) {
  const allComments = `
  select u.id       as userId,
       u.nickname as nickname,
       u.name     as userName,
       u.info     as userInfo,
       p.id       as projectId,
       p.name     as projectName,
       pc.contents as projectComments
    from ProjectComment pc
         left join Project p on p.id = pc.projectId
         left join User u on u.id = pc.userId
    where pc.projectId = ?;
  `;
  const [projectComments] = await connection.query(allComments, projectId);
  return projectComments;
}
module.exports = {
  getProjectComments,
};
