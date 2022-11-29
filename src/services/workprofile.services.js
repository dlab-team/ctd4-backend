const { Workprofile } = require('../models')


//* create
const createWorkProfile = async (work_profile) => {
    try {
        const newWorkprofile = await work_profile.save()
        return newWorkprofile;
    } catch (error) {
        throw Error(error)
    }
};
// * Send data
const updateDataWorkprofile = async (workprofile) => {
    try {
        return 'workprofile was is successfuly update ', workprofile;
    } catch (error) {
        throw Error(error)
    }
};
const getWorkProfileById = async (userId) => {
    try {
        // const workprofile = await WorkProfile.findOne({
        // where: userId,
        // })        
        const workprofile = { id: userId, fullname: 'fake workprofile' }
        return workprofile;
    } catch (error) {
        throw Error(error)
    }

}

module.exports = {
    updateDataWorkprofile,
    createWorkProfile,
    getWorkProfileById
}
