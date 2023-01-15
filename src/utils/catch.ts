import express from "express";
import { Request, Response, NextFunction } from "express";

export const asyncHandler =
  (fn: Function) => (req: Request, res: Response, next: NextFunction) =>
    fn(req, res, next).catch(next);
