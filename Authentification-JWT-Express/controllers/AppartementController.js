const AppartementModel = require("../models/AppartementModel");

const createAppartement = async (req, res) => {
    try {
        const appartement = AppartementModel.create(req.body);
        await appartement.save();
        res.json({ success: "Appartement created successfully", appartement });
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};
const getAllAppartements = async (req, res) => {};
const getAppartementById = async (req, res) => {};
const updateAppartement = async (req, res) => {};
const deleteAppartement = async (req, res) => {};

module.exports = {
    createAppartement,
    getAllAppartements,
    getAppartementById,
    updateAppartement,
    deleteAppartement,
};
