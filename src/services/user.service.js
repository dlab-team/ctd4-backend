const { User } = require('../models/user')
const { comparePassword } = require('../utils/password.util')

const findAndGenerateToken = async (data) => {
    try {
        const { email, password } = data;
        console.log(User)
    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });
    
    //if (user && (await comparePassword(password, user.password))) {
      if (user &&  password == user.password) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
    } catch (error) {
        throw Error(error)
    }
}


module.exports = { findAndGenerateToken };