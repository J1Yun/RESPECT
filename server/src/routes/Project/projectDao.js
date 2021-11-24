async function showProjectList(connection, userId) {
  const getProjectList = `
    select P.imageUrl as projectImage, P.name as projectName, P.about as about, P.start as startDate, P.end as endDate
    from Project P
         left join User U on P.userId = U.id
    where U.name = ?; 
    `;
  const [getUserProjects] = await connection.query(getProjectList, userId);
  return getUserProjects;
}
async function retrieveProject(connection, userId, projectId) {
  const getProjectInfo = `
       select u.nickname   as userNickname,
       u.name       as userName,
       u.imageUrl   as userBackgroundImage,
       p.name       as projectName,
       p.role       as projectRole,
       p.about      as projectAbout,
       p.start      as projectStart,
       p.end        as projectEnd,
       p.readMe     as readMe,
       p.stack      as teckStack,
       p.projectUrl as projectUrl,
       p.imageUrl   as projectImageUrl
    from Project p
         left join User u on p.userId = u.id
    where u.id = ${userId} and p.id = ${projectId};
  `;
  const [getProjectByUserIdProjectId] = await connection.query(getProjectInfo, userId, projectId);
  return getProjectByUserIdProjectId;
}

module.exports = {
  showProjectList,
  retrieveProject,
};
