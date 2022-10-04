const httpStatus = require('http-status');
const { Users } = require('../models');
const { passwordHashing } = require('../utils/password.util');

const userSignup = async (req, res, next) => {
  try {
    const { email, password, re_password } = req.body
    
    // Validacion campos vacios
    if(!email || !password || !re_password){
      res.status(httpStatus.BAD_REQUEST);
      return res.json({ message: 'Algunos campos estan vacios'});
    }
    
    // Validacion contraseñas desiguales
    if(password != re_password){
      res.status(httpStatus.BAD_REQUEST);
      return res.json({ message: 'Contraseñas desiguales'});
    }
    
		// Validacion requisitos contraseña
    const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
		if (regex.test(password) === false) {
      res.status(httpStatus.BAD_REQUEST);
      return res.json({ message: 'La contraseña no cumple con los requisitos'});
		}
    
    //Validación dentro de la base de datos
    const existingUser = await Users.findOne({ where: { email: email } })
    if (existingUser) {
      res.status(httpStatus.BAD_REQUEST);
      return res.json({ message: 'Este correo ya se encuentra registrado'});
    }
    
    // Encriptacion de la contraseña
    const passwordHash = await passwordHashing(password)
    const user = await new Users({ email, password: passwordHash })
    const savedUser = await user.save()
    res.status(httpStatus.OK);
    res.json(savedUser)

  } catch (error) {
    return next(error)
  }
}

module.exports = { userSignup }