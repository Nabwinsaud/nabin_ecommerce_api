import type { Request, Response, NextFunction } from "express";
import userService from "../../services/user.service";
import { StatusCodes } from "../../constants/statusCodes";
export class UserController {
  static async signup(req: Request, res: Response, next: NextFunction) {
    await userService.signup();
    res
      .status(StatusCodes.CREATED)
      .json({ success: true, message: "user created successfully" });
  }
}
