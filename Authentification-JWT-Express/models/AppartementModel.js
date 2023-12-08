const mongoose = require("mongoose");

const schema = {
    number: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    building: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    owner: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    status: {
        type: String,
        required: true,
        enum: ["rental", "sold"],
    },
};

const appartementSchema = new mongoose.Schema(schema);
module.exports = mongoose.model("Appartement", appartementSchema);
