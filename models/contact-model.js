const { Schema, model, default: mongoose } = require("mongoose");

const contactSchema = new Schema({
    fname: { type: String, required: true},
    lname: { type: String, required: true},
    email: { type: String, required: true},
    mob_num: { type: String, required: true},
    message: { type: String, required: true}
});

const Contact = new model('Contact', contactSchema )
module.exports = Contact;