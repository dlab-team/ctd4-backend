const httpStatus = require('http-status');
const { workprofileService, Database } = require("../services");
const workProfileView = require('../views/workProfile.view');


const getDataWorkprofileByUser = async (req, res) => {
    const { user_id: userId } = req.params;
    const workProfile = await workProfileService.getWorkProfileByIdUser(parseInt(userId))
    if (workProfile) {
      const workProfileJson = workProfileView(workProfile);
      return res.status(httpStatus.OK).json(workProfileJson);
    } else {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: 'Not Found',
        data: ''
      });
    }
  
  };
  
  const getWorkProfiles = async (req, res) => {
    res.status(httpStatus.OK).json({ success: true, message: "Work Profiles obtained" });
  
  };


const createWorkProfile = async (req, res) => {

    try {
        
        const userSessionId = req.userSession.id;
        const { work_profile } = req.body
        work_profile.id = userSessionId
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
            data: updateWorkProfile
        });
    
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            ok: false,
            msg: error.mesagge
        });
    }

};
    const deleteWorkProfile = async (req, res) => {
        res.status(httpStatus.OK).json({ success: true, message: "Work Profile deleted" });
    };
  

    const getDataWorkprofile = async (req, res) => {
    const getDataWorkprofile = await workprofileService.getDataWorkprofile()
  
    res.status(httpStatus.OK).json({
      success: true,
      message: "succesfull",
      data: { data_workprofile: getDataWorkprofile },
    })}



module.exports = {
    getDataWorkprofileByUser,
    createWorkProfile,
    getWorkProfiles,
    updateWorkProfile,
    deleteWorkProfile,
    getDataWorkprofile
};
