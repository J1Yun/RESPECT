const ProfileService = require('./profileService');
const baseResponse = require('../../config/baseResponseStatus');
const { response } = require('../../config/baseResponseStatus');

exports.userProfile = async function (req, res) {
  const userId = req.params.userId;
  const checkProfile = await ProfileService.getUserProfile(userId);
  console.log(checkProfile);
  return res.json(checkProfile);
};
