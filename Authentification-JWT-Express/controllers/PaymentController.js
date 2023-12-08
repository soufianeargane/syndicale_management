const PaymentModel = require("../models/PaymentModel");
const AppartementModel = require("../models/AppartementModel");

const createPayment = async (req, res) => {
    try {
        const { amount, apartmentId } = req.body;

        const today = new Date();
        const month = today.getMonth() + 1; // Months are zero-based
        const year = today.getFullYear();

        const payment = await PaymentModel.create({
            amount,
            apartment: apartmentId,
            month,
            year,
        });

        res.json({ success: "Payment created successfully", payment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
};

const getPaymentsByMonth = async (req, res) => {
    try {
        const today = new Date();
        const month = today.getMonth() + 1; // Months are zero-based
        const year = today.getFullYear();

        // Apartments that have paid this month
        const paidApartments = (
            await PaymentModel.find({
                month,
                year,
            }).distinct("apartment")
        ).map(String);

        console.log(paidApartments);

        // All apartments
        const allApartments = (
            await AppartementModel.find().distinct("_id")
        ).map(String);
        console.log("hhhhhh");

        console.log(allApartments);

        // Apartments that haven't paid this month
        const unpaidApartments = allApartments.filter((apartment) => {
            return !paidApartments.includes(String(apartment));
        });
        console.log("unpaidApartments");
        console.log(unpaidApartments);

        res.json({
            paidApartments,
            unpaidApartments,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    createPayment,
    getPaymentsByMonth,
};
