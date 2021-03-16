const router = require("express").Router();
const apptRoutes = require("./appointments.js");

router.use("/appointments", apptRoutes);
router.use("/create-appt",);
//router.use("/login",);

module.exports = router;
