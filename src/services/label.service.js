const httpStatus = require('http-status');



const saveLabel = async (label) => {
    try {
        const newLabel = await label.save()
        return newLabel
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            ok: false,
            msg: error.mesagge
        });
    }
};


const deleteLabel = async (name) => {
     try {
        const result = await name.delete()
        return result
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            ok: false,
            msg: error.mesagge
        });
    }
};

module.exports = {
   saveLabel,
   deleteLabel
}