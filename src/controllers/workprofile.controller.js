const httpStatus = require('http-status');
const { workprofileService } = require("../services");

const createWorkProfile = async (req, res, next) => {

    try {
        // const work_profile = { id: '001', name: 'fake workprofile' }
        const { work_profile } = req.body
        const newWorkProfile = await workprofileService.createWorkProfile(work_profile)


        if (!newWorkProfile) {
            const error = new Error("work profile cannot be created");
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                ok: false,
                msg: error.mesagge
            });
        }
        res.status(httpStatus.CREATED).json({
            ok: true,
            msg: "Created successfully",
            data: newWorkProfile
        });

    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            ok: false,
            msg: error.mesagge
        });
    }

    next();
};
const updateWorkProfile = async (req, res, next) => {

    try {

        const { workprofileId } = req.params
        const { name } = req.body.work_profile

        const workProfileFound = await workprofileService.getWorkProfileById(workprofileId)


        if (!workProfileFound) {
            const error = new Error("work profile not Found");
            return res.status(httpStatus.NOT_FOUND).json({
                ok: false,
                msg: error.mesagge
            });
        }

        const updateWorkprofile = await workprofileService.updateDataWorkprofile(workProfileFound)

        if (!updateWorkprofile) {
            const error = new Error("work profile could not be updated");
            return res.status(httpStatus.NOT_FOUND).json({
                ok: false,
                msg: error.mesagge
            });
        }
        updateWorkprofile.name = name || updateWorkprofile.name

        res.status(httpStatus.OK).json({
            ok: true,
            msg: "Update successfully",
            data: updateWorkprofile
        });
        next();
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            ok: false,
            msg: error.mesagge
        });
    }
    next();

};



module.exports = {
    createWorkProfile,
    updateWorkProfile,
};
