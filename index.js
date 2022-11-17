require('dotenv').config()

const express = require('express')
const cors = require('cors')
const cookieSession = require('cookie-session')
const routes = require('./src/routes/')
import passport from 'passport'
import '../middlewares/google.js'

const app = express()

const jwt = require('jsonwebtoken')

// cors config
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  allowedHeaders: 'Content-Type,Authorization'
}

// middleware para las cookies
app.use(
  cookieSession({
    name: 'session',
    keys: 'clave',
    // opciones de las cookies
    maxAge: 24 * 60 * 60 * 1000 // duracion de 24 horas
  })
)
// middleware para las google
app.use(express.json())
app.use(passport.initialize())
// routes de google
// ROUTES

app.use(
  '/auth',
  passport.authenticate('auth-google', {
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ],
    session: false
  }),
  loginRouter
)
// fin de google

app.use(cors(corsOptions))

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', routes)

app.get('/', function (_req, res) {
  res.send({
    name: 'Devsafio API',
    environment: process.env.NODE_ENV
  })
})

app.get('/ping', function (_req, res) {
  res.send('pong')
})

/* istanbul ignore if */
//*This means: Run app.listen(8080) only if you are running the file
if (!module.parent) {
  const server = app.listen(process.env.PORT, function () {
    const port = server.address().port
    console.log('Example app listening at http://localhost:%s', port)
  })
}

module.exports = app
