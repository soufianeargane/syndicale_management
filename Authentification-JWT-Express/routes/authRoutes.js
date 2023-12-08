const authController = require("../controllers/authController");
const express = require("express");
const router = express.Router();

router.post("/login", authController.login);
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Authenticate a user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       description: User login data
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful authentication
 *       400:
 *         description: unvalid email or password
 */
router.post("/logout", authController.logout);
/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Log out a user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       description: User logout data
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               authToken:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged out successfully
 */
module.exports = router;
