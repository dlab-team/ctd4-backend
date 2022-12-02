const { Router } = require('express');
const httpStatus = require('http-status');
const { json } = require('sequelize');
const { labelService } = require('../services')
const { Labels } = require('../models');

const getLabel = async (req, res) => { 
    try {
        const labels = await Labels.findAll({
            attributes: [ 'name']
        })
        res.json(labels)
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            ok: false,
            message: console.error.message
        })
    }
};

const postLabel = async (req, res) => {
    try { 
   
        const { name } = req.body
        const label = await new Labels( { name } )
        const result = await labelService.saveLabel(label)
        res.json(result)

    } catch (error) {
       res.status(500).send("algo salio mal...")
    }
}


const deleteLabel = async ( req, res ) => {
    try {
        const { name } = req.query;

        const result = await deleteLabel( { name } );

        res.json(result)
    } catch (error) {
        res.status(500).send("algo salio mal...")
    }
}

module.exports = { getLabel, postLabel, deleteLabel } 
