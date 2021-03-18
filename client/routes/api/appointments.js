const router = require("express").Router();
const apptController = require("../../controllers/ApptCard");

// "/api/appointments"
router.route("/")
    .get(apptController.findAll)
    .post(apptController.create);