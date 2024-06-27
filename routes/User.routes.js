import express from "express";
import {signUp, signIn} from "../controllers/User.controllers.js";
const router = express.Router();

router.post("/sign_up", signUp);
router.post("/sign_in", signIn);

export default router;