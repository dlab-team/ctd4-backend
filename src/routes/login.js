const express = require("express");
const router = express.Router();
//login request
router.get('/', (req, res) => {
    res.send('Ruta de logeo activa')
});

module.exports = router;