const httpStatus = require('http-status')
// TODO: cambiar nombre del metodo a un estandar es decir 'getUsers' si es una lista de usuarios o 'getUser' si solo es uno
const getUserInfo = async (req, res) => {
    try {
        const userInfo = await Users.findOne({
            where: { id: userId }
        })
        return userInfo

    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            ok: false,
            msg: error.mesagge
        });
    }
};

const saveUser = (req, res) => {
    // verify access token 
    // get user from body
    // check if User exist 
    // if not exist return error message
    // save user in database
    // return successful message

}
const updateUser = async (req, res) => {
    const { id } = req.user
    console.log(id)
    // verify access token 
    // get id param 
    // check if User exist
    // if not exist return error message
    // update de User in database
    // retun successful message
    try {
        res.send('return user')
        // .json({ data: req.user })
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            ok: false,
            msg: error.mesagge
        });
    }
}

module.exports = { getUserInfo, saveUser, updateUser }
