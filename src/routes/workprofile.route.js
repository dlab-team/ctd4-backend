const express = require("express");
const { workprofileController } = require("../controllers/");


const router = express.Router();


router.post("/", workprofileController.createWorkProfile);
router.put("/:id", workprofileController.updateWorkProfile);

// Get enum Values

module.exports = router;
