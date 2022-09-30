const express = require("express");
const router = express.Router();
const { passwordHashing } = require("../utils/password.util");
const User = require('../models/user');
const { validateCreate } = require("../validators/registration");
const { register } = require("../controllers/ ");
//registration route
router.get('/signup', (req, res) => {
  res.send('Ruta de logeo activa')
});

//registration request (contiene el middleware 'validateCreate' de express-validator que valida el correo y el password, es opcional usarlo ya que también sirven las regex)
router.post('/signup', validateCreate, register.userRegister)
