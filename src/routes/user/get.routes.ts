import { Router } from "express";
import auth from "../../middlewares/auth";
import * as getControllers from "../../controllers/user/get.controllers";

const router = Router();

router.get("/getAll/user", auth, getControllers.getAll);
router.get("/getById/user/:id", getControllers.getById);

export default router;
