import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, "../../.env") });

export default class EnvConfiguration {
  static NODE_ENV = process.env.NODE_ENVIRONMENT;
  static PORT: number = parseInt(process.env.PORT, 10);

  // databse stuff
  static DATABASE_PORT: number = parseInt(process.env.DATABASE_PORT, 10);
  static DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
  static DATABASE_USERNAME = process.env.DATABASE_USERNAME;
  static DATABASE_NAME = process.env.DATABASE_NAME;

  // logger
  static DEBUG_MODE = process.env.DEBUG_MODE;

  // JWT
  static ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET!;
  static ACCESS_TOKEN_EXPIRES_IN = process.env.ACCESS_TOKEN_EXPIRES_IN!;
  static REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET!;
  static REFRESH_TOKEN_EXPIRES_IN = process.env.REFRESH_TOKEN_EXPIRES_IN!;
}
