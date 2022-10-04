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
      return res.json({ message: 'La Contraseña No Cumple Con Los Requisitos'});
		}
    
    //Validación dentro de la base de datos
    const existingUser = await Users.findOne({ where: { email: email } })
    if (existingUser) return res.status(400).json({ error: 'Este correo ya se encuentra registrado' })
    
    // Encriptacion de la contraseña
    const passwordHash = passwordHashing(password)
    const user = new Users({ email, passwordHash })
    const savedUser = await user.save()
    res.status(201).json(savedUser)

  } catch (error) {
    return next(error)
    	console.log(error)
        return res.status(400).json({
          ok: false,
          msg: error.message
        })
  }
}

module.exports = { userSignup }