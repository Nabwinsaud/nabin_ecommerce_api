import express from "express";
import type { Express } from "express";
import compression from "compression";
import cors from "cors";
import fileUpload from "express-fileupload";
import routes from "../routes/index";
import { errorHandler } from "./error.middleware.";
export const middleware = (app: Express) => {
  app.use(cors());
  app.use(compression());
  app.use(fileUpload());
  // for pasring the json data
  app.use(express.json());
  app.use("/api", routes);
  // app.use(errorHandler);
};
