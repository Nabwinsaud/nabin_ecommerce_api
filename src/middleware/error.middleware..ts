import express from "express";
import type { Request, Response, NextFunction } from "express";
import chalk from "chalk";
import { StatusCodes } from "../constants/statusCodes";
class AppError {
  constructor(public message: string, public statusCode: StatusCodes) {}
}

const log = console.log;
export const errorLog = {
  error: (error: AppError) => log(chalk.red(error)),
  warning: (warning: string) => log(chalk.yellow(warning)),
  success: (success: string) => log(chalk.green(success)),
};
export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message, statusCode } = err;
  if (process.env.NODE_ENV === "development") {
    errorLog.error(err);
  }
  res.status(statusCode).json({ success: false, statusCode, message });
  next();
};
