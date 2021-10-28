const ProjectService = require('./projectService');
const baseResponse = require('../../config/baseResponseStatus');
const { response } = require('../../config/baseResponseStatus');

exports.projectList = async function (req, res) {
  // github 연동이 되있을 경우
  if (req.session.currentUser.githubId) {
    const userId = req.params.userId;
    const githubId = req.session.currentUser.githubId;
    const projectResult = await ProjectService.getProjectList(userId);
    res.json(projectResult);
  } else {
    res.redirect('http://localhost:3000/githubLogin');
  }
};
exports.getProjectByUserProjectId = async function (req, res) {
  const userId = req.params.userId;
  const projectId = req.params.projectId;
  const myProject = await ProjectService.retrieveProjectByProjectId(userId, projectId);
  res.json(myProject);
};
