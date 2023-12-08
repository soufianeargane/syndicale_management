const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    amount: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    apartment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appartement",
        required: true,
    },
    month: {
        type: Number,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Payment", paymentSchema);
