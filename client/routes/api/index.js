const router = require("express").Router();
const apptRoutes = require("./appointments.js");

router.use("/appointments", apptRoutes);
//router.use("/login",);

module.exports = router;
