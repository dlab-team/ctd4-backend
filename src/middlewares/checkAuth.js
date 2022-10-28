const httpStatus = require("http-status");
const { userService } = require("../services");
const { decodeToken } = require("../utils/token.util");


const checkAuth = async (req, res, next) => {
    let token = '';
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {

        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = decodeToken(token)
            // we return the user added in the request and thus be able to be required as a parameter by the following middleware until we reach the controlle
            const user = await userService.getUserByEmail(decoded)
            req.user = user


            return next();
        } catch (error) {
            return res.status(httpStatus.NOT_FOUND).json({ message: 'Hubo un error', errors: error.message })
        }
    }
    if (!token) {
        const error = new Error('Invalid Token')
        return res.status(httpStatus.UNAUTHORIZED).json({ message: '', errors: error.message });
    }
    next()
}
module.exports = checkAuth