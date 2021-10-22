const CommentService = require('./commentService');
const baseResponse = require('../../config/baseResponseStatus');
const { response } = require('../../config/baseResponseStatus');

class Comment {
  constructor() {}
  projectComment = async function (req, res) {
    const projectId = req.params.projectId;
    const comments = await CommentService.getAllComments(projectId);
    if (comments[0] == null) {
      // 댓글이 없을 경우
      res.send('There is no comments');
    } else {
      res.json(comments);
    }
  };

  addComment = async function (req, res) {
    const userId = req.session.user.id;
    const projectId = req.params.projectId;
    const comments = req.body;
    if (!comments) {
      res.send('댓글을 입력하세요.');
    }
    const commentAddResponse = await CommentService.putComment(userId, projectId, comments);
    return res.send(commentAddResponse);
    //res.send(`/comment/${projectId}`);
  };
}
module.exports = new Comment();
