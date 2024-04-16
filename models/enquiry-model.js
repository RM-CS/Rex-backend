const { Schema, model, default: mongoose } = require("mongoose");

const enquirySchema = new Schema({
    name: { type: String, required: true},
    business_name: { type: String, required: true},
    designation: { type: String, required: true},
    mob_num: { type: String, required: true},
    email: { type: String, required: true},
    message: { type: String, required: true}
});

const Enquiry = new model('Enquiry', enquirySchema )
module.exports = Enquiry;