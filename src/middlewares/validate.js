const { validationResult } = require("express-validator");
const httpStatus = require("http-status");

const validateFields = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST);
        res.send({
            msg: "Invalid request",
            errors: error.array()
        });
    }
};

module.exports = validateFields;
