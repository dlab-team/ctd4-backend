const httpStatus = require('http-status');


//* create
const createWorkProfile = async (workprofile) => {
    try {
        return workprofile;
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            ok: false,
            msg: error.mesagge
        });
    }
};
// * Send data
const updateDataWorkprofile = async (workprofile) => {
    try {
        return 'workprofile was is successfuly update ', workprofile;
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            ok: false,
            msg: error.mesagge
        });
    }
};
const getWorkProfileById = async (userId) => {
    try {
        // const workprofile = await WorkProfile.findOne({
        // where: userId,
        // })        
        const workprofile = { id: userId, name: 'fake workprofile' }
        return workprofile;
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            ok: false,
            msg: error.mesagge
        });
    }

}

module.exports = {
    updateDataWorkprofile,
    createWorkProfile,
    getWorkProfileById
}
