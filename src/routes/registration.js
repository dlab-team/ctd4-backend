const express = require("express");
const router = express.Router();
const { passwordHashing } = require("../utils/password.util");
const User = require('../models/user');
const { validateCreate } = require("../validators/registration");

//registration route
router.get('/signup', (req, res) => {
  res.send('Ruta de logeo activa')
});

//registration request (contiene el middleware 'validateCreate' de express-validator que valida el correo y el password, es opcional usarlo ya que también sirven las regex)
router.post('/signup', validateCreate, async (req, res) => {
  try {
    const { email, password, re_password } = request.body
    
    // Validacion campos vacios
    if(!email || !password || !re_password){
    	throw new Error("Algunos campos estan vacios")
    }
    
    // Validacion contraseñas desiguales
    if(password != re_password){
    	throw new Error("Contraseñas desiguales")
    }
    
		// Validacion requisitos contraseña
    const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
		if (regex.test(password) === false) {
  		throw new Error("La Contraseña No Cumple Con Los Requisitos");
		}
    
    //Validación dentro de la base de datos
    const existingUser = false
    if (existingUser) return response.status(400).json({ error: 'Este correo ya se encuentra registrado' })
    
    // Encriptacion de la contraseña
    const passwordHash = passwordHashing(password)
    const user = new User({ email, passwordHash })
    const savedUser = await user.save()
    response.status(201).json(savedUser)

  } catch (error) {
    	console.log(error)
        return res.status(400).json({
          ok: false,
          msg: error.message
        })
  }
});