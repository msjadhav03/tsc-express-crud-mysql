"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEEDS_FOLDER_PATH = exports.MIGRATION_FOLDER_PATH = exports.SWAGGER_OPTIONS = exports.MODULE_NAME = void 0;
exports.MODULE_NAME = {
    COMMON: "Common Module",
    BLOG: "blog Module",
};
exports.SWAGGER_OPTIONS = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "Bi: blog Manager",
            version: "0.1.0",
            description: "This is an blog managment CRUD REST API's application made with Express and documented with Swagger",
            contact: {
                name: "Bi: blog Manager",
            },
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["./lib/src/blog/routes/*.js"],
};
exports.MIGRATION_FOLDER_PATH = "./db/migrations";
exports.SEEDS_FOLDER_PATH = "./db/seeds";
