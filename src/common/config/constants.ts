export const MODULE_NAME = {
  COMMON: "Common Module",
  BLOG: "blog Module",
};

export const SWAGGER_OPTIONS = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Bi: blog Manager",
      version: "0.1.0",
      description:
        "This is an blog managment CRUD REST API's application made with Express and documented with Swagger",

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

export const MIGRATION_FOLDER_PATH = "./db/migrations";
export const SEEDS_FOLDER_PATH = "./db/seeds";
