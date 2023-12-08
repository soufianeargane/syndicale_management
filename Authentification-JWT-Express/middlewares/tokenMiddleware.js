const validateToken = require("../validators/validateToken");
function checkTokenMiddleware(req, res, next) {
    const token = req.cookies["authToken"];

    if (!token)
        return res
            .status(401)
            .json({ error: "Access denied, u need to log in hhhh" });

    console.log(token);
    // verify token
    const decoded_user = validateToken(token);
    if (!decoded_user.success) {
        return res.status(401).json({ error: "Access denied" });
    }
    req.user = decoded_user.data;
    next();
}

module.exports = checkTokenMiddleware;
