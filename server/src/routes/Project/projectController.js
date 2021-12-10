const ProjectService = require('./projectService');
const baseResponse = require('../../config/baseResponseStatus');
const { response } = require('../../config/baseResponseStatus');

const output = {
  projectList: async (req, res) => {
    // github 연동이 되있을 경우
    if (req.session.githubUser.githubId) {
      const userId = req.params.userId;
      const githubId = req.session.currentUser.githubId;
      const projectResult = await ProjectService.getProjectList(userId);
      res.json(projectResult);
    } else {
      res.redirect('http://localhost:3000/githubLogin');
    }
  },
  projectDetail: async (req, res) => {
    const userId = req.params.userId;
    const projectId = req.params.projectId;
    const projectInfo = await ProjectService.retrieveProjectByProjectId(userId, projectId);
    const commentList = await ProjectService.getProjectComment(userId, projectId);

    const projectPage = { projectInfo, commentList };
    //console.log(projectPage.projectResult[0].userNickname);
    //console.log(projectPage.commentList[i].userId);
    return res.json(projectPage);
  },
};

const process = {};
module.exports = {
  output,
  process,
};
