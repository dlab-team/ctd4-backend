const service = require('../services')
const userService = service.userService
const httpStatus = require('http-status');

const userAuth = async (req, res, next) => {
  try {
    
    const { email, password, success } = await userService.findUser(req.body)

    if (!success) {
      res.status(httpStatus.UNAUTHORIZED);
    return res.json({ message: 'Invalid Credentials'}); 
      
    }

    const token = await userService.generateTokenResponse(email, password)
      
      
      return res.status(httpStatus.OK).json({
        message: 'Auth de usuario',
        token
      })
    
  } catch (error) {
    return next(error)
  }
}

module.exports = { userAuth }
