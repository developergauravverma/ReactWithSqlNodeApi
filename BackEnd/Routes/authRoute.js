import Express from "express";
import {
  registerController,
  loginController,
} from "../Controller/authController.js";
const router = Express.Router();

router.post("/register", registerController);
router.post("/login", loginController);

export default router;
