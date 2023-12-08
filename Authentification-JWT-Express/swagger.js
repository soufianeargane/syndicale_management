const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

const options = {
    swaggerDefinition: {
        openapi: "3.0.0", // OpenAPI version
        info: {
            title: "Your API Documentation",
            version: "1.0.0",
            description: "API documentation for your Express.js app",
        },
        servers: [
            {
                url: "http://localhost:3000", // Replace with your server URL
                description: "Local Development Server",
            },
        ],
    },
    apis: ["routes/*.js"], // Specify the path to your API route files
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
