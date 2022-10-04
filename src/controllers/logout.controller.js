const httpStatus = require("http-status");

const logout = (req, res) => {

    try {
            localStorage.removeItem("token")
            res.status(httpStatus.OK).json({ success: true, message: "Logout Success"});

        } catch (error) {
            throw Error(error);
        }
};

module.exports = { logout };
