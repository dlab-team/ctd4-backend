const httpStatus = require('http-status')
const { User, WorkProfile, EducationalProfile } = require('../models')
const { userService, workprofileService } = require('../services')
const { v4: uuidv4 } = require('uuid')
const getUserInfo = async (req, res) => {
  try {
    const userId = req.user.id
    const userInfo = await userService.getFullInfoUserById(userId)

    res.json(userInfo)
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      msg: error.mesagge
    })
  }
}

const updateUser = async (req, res) => {
  try {
    const { userId } = req.params

    const { email, fullname, address, phoneNumber, cityId, workProfile } =
      req.body.user
    const EducationalProfileB = req.body.EducationalProfile

    const EducationInfo = await userService.getEducationalProfilesByIdUser(
      userId
    )

    const userExists = await userService.getUserById(userId)

    if (!userExists) {
      const error = new Error('¡EL usuario no existe!')
      return res.status(httpStatus.NOT_FOUND).json({
        ok: false,
        msg: error.message
      })
    }
    userExists.fullname = fullname || userExists.fullname
    userExists.email = email || userExists.email
    userExists.address = address || userExists.address
    userExists.phoneNumber = phoneNumber || userExists.phoneNumber
    userExists.cityId = cityId || userExists.cityId

    const updateUser = await userService.saveUser(userExists)

    //preguntar si viene la actualizacion de datos
    if (EducationalProfileB) {
      // Destruir educational profile
      if (EducationInfo != null) {
        await EducationInfo.destroy({
          where: {
            userId: userId
          }
        })
      }

      //recorrer Educational Profile
      for (educational of EducationalProfileB) {
        // insertar en la tabla
        const educationalProfile = await EducationalProfile.create({
          userId: updateUser.id,
          levelEducational: educational.levelEducational,
          careerName: educational.careerName,
          institutionName: educational.institutionName,
          institutionType: educational.institutionType,
          currentSituation: educational.currentSituation,
          graduationDate: educational.graduationDate
        })
      }
    }

    if (!updateUser) {
      const error = new Error('¡EL usuario No pudo ser actualizado!')
      return res.status(httpStatus.BAD_REQUEST).json({
        ok: false,
        msg: error.message
      })
    }

    const {
      idealJobComment,
      featureProyect,
      activeVisa,
      currentJobSituation,
      yearsExperience,
      dreamJobComment,
      urlLinkedin,
      urlGithub,
      urlWebsite,
      urlCv,
      levelEnglish,
      employmentStatus,
      availability,
      softSkills
    } = workProfile

    const workprofileFound = await workprofileService.getWorkProfileByUserId(
      updateUser.id
    )

    if (idealJobComment != null) {
      workprofileFound.idealJobComment = idealJobComment
    }
    if (featureProyect != null) {
      workprofileFound.featureProyect = featureProyect
    }
    if (activeVisa != null) {
      workprofileFound.activeVisa = activeVisa
    }
    if (currentJobSituation != null) {
      workprofileFound.currentJobSituation = currentJobSituation
    }
    if (yearsExperience != null) {
      workprofileFound.yearsExperience = yearsExperience
    }
    if (dreamJobComment != null) {
      workprofileFound.dreamJobComment = dreamJobComment
    }
    if (urlLinkedin != null) {
      workprofileFound.urlLinkedin = urlLinkedin
    }
    if (urlGithub != null) {
      workprofileFound.urlGithub = urlGithub
    }
    if (urlWebsite != null) {
      workprofileFound.urlWebsite = urlWebsite
    }
    if (urlCv != null) {
      workprofileFound.urlCv = urlCv
    }
    if (levelEnglish != null) {
      workprofileFound.levelEnglish = levelEnglish
    }
    if (employmentStatus != null) {
      workprofileFound.employmentStatus = employmentStatus
    }
    if (availability != null) {
      workprofileFound.availability = availability
    }
    if (softSkills != null) {
      workprofileFound.softSkills = softSkills
    }

    const workprofileSaved = await workprofileService.saveWorkProfile(
      workprofileFound
    )

    if (!workprofileSaved) {
      const error = new Error('El Perfil del usuario no pudo ser actualizado')
      return res.status(httpStatus.NOT_FOUND).json({
        ok: false,
        msg: error.mesagge
      })
    }

    return res
      .status(httpStatus.OK)
      .json({ msg: 'El usuario se actualizo correctamente' })
  } catch (error) {
    console.log(error)
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      msg: error.message
    })
  }
}

const getEducationalProfiles = async (req, res) => {
  try {
    const userId = req.params

    const userExists = await userService.getUserById(userId.userId)
    if (!userExists) {
      const error = new Error('¡EL usuario no existe!')
      return res.status(httpStatus.NOT_FOUND).json({
        ok: false,
        msg: error.message
      })
    }
    const profile = await userService.getEducationalProfilesByIdUser(userId)
    if (!profile) {
      const error = new Error('¡No se pudo obtener el perfil!')
      return res.status(httpStatus.NOT_FOUND).json({
        ok: false,
        msg: error.message
      })
    }

    return res.status(httpStatus.OK).json({ data: profile })
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      msg: error.message
    })
  }
}
const getUsers = async (req, res) => {

  try {
    const users = await userService.getDataUsers()
    if (!users) {
      const error = new Error('No se pudo obtener la lista de usuarios')
      return res.status(httpStatus.NOT_FOUND).json({
        ok: false,
        msg: error.message
      })
    }

    const usersParse = JSON.parse(JSON.stringify(users))
    const data = usersParse.map(ele => {
      if (ele.City !== null && ele.Role === null) {
        return { ...ele, City: ele.City.name, country: ele.City.Country.name }
      }
      if (ele.Role !== null && ele.City === null) {
        return { ...ele, City: ele.City, country: null, Role: ele.Role.name }
      }
      if (ele.City !== null && ele.Role !== null) {
        return { ...ele, Role: ele.Role.name, City: ele.City.name, country: ele.City.Country.name }
      } else {
        return ele
      }
    })

    const dataUsers = FormatObject(data).filter(ele => ele.role === 'user')
    dataUsers.map(ele => delete ele['role'])

    return res.status(httpStatus.OK).json({ data: dataUsers })
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      msg: error.message
    })
  }

}

const FormatObject = (object) => {
  const formatObject = object.map(obj => {
    const newObjectUser = {}
    Object.entries(obj).map(([key, value]) => {
      if (value === null) {
        newObjectUser[`${key.toLowerCase()}`] = '';
      } else {
        newObjectUser[`${key.toLowerCase()}`] = value;
      }
    });
    return newObjectUser
  });
  return formatObject
}

module.exports = { getUserInfo, updateUser, getEducationalProfiles, getUsers }
