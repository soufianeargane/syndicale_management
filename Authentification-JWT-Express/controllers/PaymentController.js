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

        // Fetch all apartments
        const allApartments = await AppartementModel.find();

        // Fetch paid apartments for the current month
        const paidApartments = await PaymentModel.find({
            month,
            year,
            apartment: { $in: allApartments.map((apartment) => apartment._id) },
        }).populate("apartment");

        // Separate paid and unpaid apartments
        const paidApartmentsIds = paidApartments.map((payment) =>
            String(payment.apartment._id)
        );
        const unpaidApartments = allApartments.filter(
            (apartment) => !paidApartmentsIds.includes(String(apartment._id))
        );

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
