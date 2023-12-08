const joi = require("joi");

const validateAppartementMiddleware = (req, res, next) => {
    const schema = joi.object({
        number: joi.string().required(),
        building: joi.string().required(),
        owner: joi.string().required(),
        status: joi.string().valid("rental", "sold").required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    // If validation succeeds, move to the next middleware or controller
    next();
};

module.exports = validateAppartementMiddleware;
