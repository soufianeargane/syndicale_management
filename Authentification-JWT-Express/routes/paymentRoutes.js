const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/PaymentController");
const checkTokenMiddleware = require("../middlewares/tokenMiddleware");

router.post("/create", checkTokenMiddleware, paymentController.createPayment);
router.get("/payments-by-month", paymentController.getPaymentsByMonth);
module.exports = router;
