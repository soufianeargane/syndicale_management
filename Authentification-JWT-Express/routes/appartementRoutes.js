const express = require("express");
const router = express.Router();
const appartementController = require("../controllers/AppartementController");
const validateAppartementMiddleware = require("../validators/validateAppartement");
const checkTokenMiddleware = require("../middlewares/tokenMiddleware");

router.post(
    "/create",
    [checkTokenMiddleware, validateAppartementMiddleware],
    appartementController.createAppartement
);

router.get("/", checkTokenMiddleware, appartementController.getAllAppartements);
router.get(
    "/:id",
    checkTokenMiddleware,
    appartementController.getAppartementById
);
router.put(
    "/update/:id",
    [checkTokenMiddleware, validateAppartementMiddleware],
    appartementController.updateAppartement
);
router.delete(
    "/delete/:id",
    checkTokenMiddleware,
    appartementController.deleteAppartement
);

module.exports = router;
