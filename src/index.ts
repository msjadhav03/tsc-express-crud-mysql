import express from "express";
import dotenv from "dotenv";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import bodyParser from "body-parser";
import { router as testRoutes } from "./blog/routes/blog.routes";
import { SWAGGER_OPTIONS } from "./common/config/constants";

dotenv.config();

export const bootstrapServer = () => {
  const app = express();
  app.use(bodyParser.json());

  app.use("/", testRoutes);
  app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerJsdoc(SWAGGER_OPTIONS))
  );

  app.listen(process.env.PORT, async () => {
    console.log(`[Node.js] Server started at PORT ${process.env.PORT} `);
  });
};

bootstrapServer();
