const service = require('../services')
const userService = service.userService



const userAuth = async (req, res, next) => {


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
      const newUser = findOrCreate(req.body)

      
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