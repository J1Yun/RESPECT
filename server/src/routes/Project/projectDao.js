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

module.exports = {
  showProjectList,
};
