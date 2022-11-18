
const path = require("path")
const { v4: uuidv4 } = require('uuid');

const httpStatus = require('http-status')
const { workprofileService } = require('../services')


//CREATE
const createWorkProfile = async (req, res, next) => {
  try {
    // const work_profile = { id: '001', name: 'fake workprofile' }
    const { work_profile } = req.body
    const newWorkProfile = await workprofileService.createWorkProfile(
      work_profile
    )

    if (!newWorkProfile) {
      const error = new Error('work profile cannot be created')
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        ok: false,
        msg: error.mesagge
      })
    }
    res.status(httpStatus.CREATED).json({
      ok: true,
      msg: 'Created successfully',
      data: newWorkProfile
    })
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      msg: error.mesagge
    })
  }

  next()
}

// UPDATE
const updateWorkProfile = async (req, res, next) => {
  try {
    const { workprofileId } = req.params
    const { name, github, linkedin, urlcv, fotoID } = req.body
    const { foto } = req.files

    const workProfileFound = await workprofileService.getWorkProfileById(
      workprofileId
    )

    if (!workProfileFound) {
      const error = new Error('work profile not Found')
      return res.status(httpStatus.NOT_FOUND).json({
        ok: false,
        msg: error.mesagge
      })
    }

    const updateWorkprofile = await workprofileService.updateDataWorkprofile(
      workProfileFound
    )

    if (!updateWorkprofile) {
      const error = new Error('work profile could not be updated')
      return res.status(httpStatus.NOT_FOUND).json({
        ok: false,
        msg: error.mesagge
      })
    }

      //Validación requisitos foto de perfil
      const mimeTypes = ["image/jpeg", "image/png"]
      if(!mimeTypes.includes(foto.mimetype)){
        return res
          .status(httpStatus.BAD_REQUEST)
          .json({message: 'Solo se admiten archivos png o jpg'})
      }
      if(foto.size > 5 * 1024 * 1024){
        return res
          .status(httpStatus.BAD_REQUEST)
          .json({message: 'La foto excede el peso de 5MB'})
      }

     const pathFoto =  `${uuidv4()}.${foto.mimetype.split("/")[1]}`

    // GUARDAR LA FOTO
    
      foto.mv(path.join(__dirname, "../assets/", pathFoto), (err) => {
        if(err) return req.status().send(err)
    })
   
    
    updateWorkprofile.name = name || updateWorkprofile.name
    updateWorkprofile.linkedin = linkedin || updateWorkprofile.linkedin
    updateWorkprofile.github = github || updateWorkprofile.github
    updateWorkprofile.urlcv = urlcv || updateWorkprofile.urlcv
    updateWorkProfile.pathFoto = pathFoto || updateWorkProfile.pathFoto

    res.status(httpStatus.OK).json({
      ok: true,
      msg: 'Update successfully',
      data: updateWorkprofile
    })
    next()
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      msg: error.mesagge
    })
  }
  next()
}

module.exports = {
  createWorkProfile,
  updateWorkProfile
}
