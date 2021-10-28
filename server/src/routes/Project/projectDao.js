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
  `;
  const [getProjectByUserIdProjectId] = await connection.query(getProjectInfo, userId, projectId);
  return getProjectByUserIdProjectId;
}

module.exports = {
  showProjectList,
  retrieveProject,
};
