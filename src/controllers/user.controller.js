const httpStatus = require('http-status')

const getUserInfo = async (userId) => {
    try {
        const userInfo = await Users.findOne({
            where: {id: userId}
        })
            return userInfo

    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            ok: false,
            msg: error.mesagge
        });
    }
};

module.exports = {getUserInfo}
