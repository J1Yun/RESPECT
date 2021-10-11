const { pool } = require('../../config/database');
const userDao = require('./repositoryDao');

exports.retrieveUserIdList = async (req, res) => {
  try {
    const connection = await pool.getConnection(async (conn) => conn);

    const userIdList = await userDao.selectUserId(connection);
    connection.release();

    console.log(userIdList);
    res.json(userIdList);
  } catch (error) {
    console.log(error);
  }
};
