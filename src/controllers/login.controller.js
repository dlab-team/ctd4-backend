//const User = require('../models/user')
const service = require("../services");
const userService = service.userService;

const userAuth = async (req, res, next) => {
  try {
    //TODO: 
    const { user, accessToken } = await userService.findAndGenerateToken(req.body);
    //const token = generateTokenResponse(user, accessToken);
    const token = '123'
    console.log(req.body)
    return res.status(200).json({
      success: true,  
      message: 'Auth de usuario',
      token,
    })
  } catch (error) {
    return next(error)
  }
}

module.exports = { userAuth }
