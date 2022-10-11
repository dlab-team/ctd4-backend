const express = require("express");
const { workprofilecontroller } = require("../controllers/");

const router = express.Router();

router.route("/").get(workprofilecontroller.getWorkProfiles);
router.route("/").post(authenticateSession, workProfileController.createWorkProfile);
router.route("/users/:user_id").get(workprofilecontroller.getDataWorkprofileByUser);
router.route("/update/:id").patch(workprofilecontroller.updateWorkProfile);
router.route("/delete/:id").delete(workprofilecontroller.deleteWorkProfile);

// Get enum Values
router.route("/data-workprofile").get(workprofilecontroller.getDataWorkprofile);

module.exports = router;
