const { WorkProfile } = require('../models')


//* create
const saveWorkProfile = async (workprofile) => {
    try {
        const workprofileSaved = await workprofile.save()
        return workprofileSaved;
    } catch (error) {
        throw Error(error)
    }
};
const getWorkProfileByUserId = async (user_id) => {
    try {

        const workprofile = await WorkProfile.findOne({
            where: { userId: user_id },
        })
        // const workprofile = { id: userId }
        return workprofile;
    } catch (error) {
        throw Error(error)
    }

}

module.exports = {
    saveWorkProfile,
    getWorkProfileByUserId
}
