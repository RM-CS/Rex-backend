const express = require("express");
const router = express.Router();
const enquiryForm = require("../controllers/enquiry-controlller")

router.route("/enquiry").post(enquiryForm);

module.exports = router