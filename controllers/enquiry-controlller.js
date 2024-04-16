const Enquiry = require("../models/enquiry-model")

const enquiryForm = async (req, res) => {
    try {
        const response = req.body;
        await Enquiry.create(response)
        return res.status(200).json({ message: "message send successfully"})
    } catch (error) {
        return res.status(500).json({ message: "message not sent"})

    }
}

module.exports = enquiryForm