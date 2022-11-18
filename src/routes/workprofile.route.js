const express = require("express");
const { workprofileController } = require("../controllers/");

const expressFileUpload = require("express-fileupload")



const router = express.Router();

router.use(expressFileUpload({
    abortOnLimit: true,
}))

router.post("/", workprofileController.createWorkProfile);
router.put("/:id", workprofileController.updateWorkProfile);

// Get enum Values

module.exports = router;
