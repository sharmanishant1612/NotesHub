import { Router } from "express";

const router = Router();

import { deleteAccount, indexRoute, login, uploadProfileImage } from "../controllers/controller.user.js";
import { signup } from "../controllers/controller.user.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
// import { login } from "../controllers/controller.user.js";

router.route("/indexRoute").get(indexRoute);
router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/delete").delete(isAuthenticated,deleteAccount);
router.route("/profile-image").put(isAuthenticated,uploadProfileImage);


export default router;
