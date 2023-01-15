import { Router } from "express";
import authRoute from "./auth/auth.routes";
const router = Router();

interface Route {
  path: string;
  route: Router;
}
const routes: Route[] = [{ path: "/", route: authRoute }];

// looping all the routes

routes.forEach((route) => router.use(route.path, route.route));

// for get instance

router.get("/", (_, res, __) => {
  res.send({ success: true, message: "Welcome to the fullstack api" });
});

export default router;
