//const User = require('../models/userModel')

const userAuth = (req, res, next) => {
  try {
    //TODO: const { user, accessToken } = await User.findAndGenerateToken(req.body);
    //const token = generateTokenResponse(user, accessToken);
    const token = '123'
    console.log(req.body)
    return res.json({
      token,
      message: 'Auth de usuario'
    })
  } catch (error) {
    return next(error)
  }
}

module.exports = { userAuth }
