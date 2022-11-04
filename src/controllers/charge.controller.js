const httpStatus = require('http-status')
const { json } = require('sequelize')
const {  Charge } = require('../models')

const getCharges = async (req, res) => {
    try {
        const charges = await Charge.findAll({ 
            attributes: [ 'id', 'name']
        })
        res.json(charges)
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            ok: false,
            message: console.error.message
        })
        
    }
}
module.exports = { getCharges }