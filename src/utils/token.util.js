const jwt = require('jsonwebtoken')

const createToken = (payload, expires) => {
  const token = jwt.sign(payload, process.env.SECRET, {
    expiresIn: expires
  })

  return token
}

const decodeToken = (token) => {
  const { email } = jwt.verify(token, process.env.SECRET)
  return email
}

module.exports = { createToken, decodeToken }
