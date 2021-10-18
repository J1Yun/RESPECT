const ProjectService = require('./projectService');
const baseResponse = require('../../config/baseResponseStatus');
const { response } = require('../../config/baseResponseStatus');

exports.projectList = async function (req, res) {
  const userId = req.params.userId;
  const showProject = await ProjectService.getProjectList(userId);
  res.json(showProject);
};
