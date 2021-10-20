const CommentService = require('./commentService');
const baseResponse = require('../../config/baseResponseStatus');
const { response } = require('../../config/baseResponseStatus');

exports.projectComment = async function (req, res) {
  const projectId = req.params.projectId;
  const Comments = await CommentService.getAllComments(projectId);
  console.log(Comments);
  res.json(Comments);
};
