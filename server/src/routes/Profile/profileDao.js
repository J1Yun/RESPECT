async function getUserProfileInfo(connection, userId) {
  const getUserInfo = `
  select U.name,
    U.nickname,
    U.info,
    U.contactPhone,
    U.email,
    U.location,
    U.imageUrl,
    count(R.userId) as respectCount
from User U
      left join Respect R ON U.id = R.userId
      where U.name = ?;
    `;
  const [userProfile] = await connection.query(getUserInfo, userId);
  return userProfile;
}

async function getUserInterests(connection) {
  const getUserInterest = `
  select IC.name
    from User U
             left join Interest I on (U.id = I.userId)
             left join InterestCateogry IC on I.interestId = IC.id;
    
    `;
  const [userInterest] = await connection.query(getUserInterest);
  return userInterest;
}

async function getUserTeckStack(connection) {
  const getUserStack = `
    select SC.imageUrl, SC.name
from User U
         left join Stack S on (U.id = S.userId)
         left join StackCategory SC on S.stackId = SC.id
where S.level = 'ADVANCED';
    `;
  const [userTeckStack] = await connection.query(getUserStack);
  return userTeckStack;
}

async function getUserExperience(connection) {
  const getUserCareer = `
select C.name, C.career, C.start, C.end
from User U
         left join Career C on U.id = C.userId;
    `;
  const [userExperience] = await connection.query(getUserCareer);
  return userExperience;
}

async function getUserEducation(connection) {
  //const getUserInstitute =
}
module.exports = {
  getUserProfileInfo,
};
