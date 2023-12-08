const AppartementModel = require("../models/AppartementModel");

const createAppartement = async (req, res) => {
    try {
        const appartement = await AppartementModel.create(req.body);
        res.json({ success: "Appartement created successfully", appartement });
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};
const getAllAppartements = async (req, res) => {
    const appartement = await AppartementModel.find({});
    return res.json({ status: true, data: appartement });
};
const getAppartementById = async (req, res) => {};
const updateAppartement = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedAppartement = await AppartementModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );
        if (!updatedAppartement) {
            return res.status(404).json({ error: "Appartement not found" });
        }
        res.json({
            success: "Appartement updated successfully",
            updatedAppartement,
        });
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Something went wrong" });
    }
};
const deleteAppartement = async (req, res) => {};

module.exports = {
    createAppartement,
    getAllAppartements,
    getAppartementById,
    updateAppartement,
    deleteAppartement,
};
