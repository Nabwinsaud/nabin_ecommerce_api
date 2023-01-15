import express from "express";
import type { Request, Response } from "express";
export default class AuthController {
  static async registerUesr(req: Request, res: Response) {
    const { username, email, password, confirmPassword } = req.body;
  }
}
