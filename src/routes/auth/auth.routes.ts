import { Router } from "express";
import { asyncHandler } from "../../utils/catch";
import AuthController from "../../controller/auth/auth.controller";

const router = Router();
router.post("/register", asyncHandler(AuthController.registerUesr));

export default router;
