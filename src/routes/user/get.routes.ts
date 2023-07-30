import { Router } from "express";
import * as getControllers from "../../controllers/user/get.controllers";
import auth from "../../middlewares/auth";

const router = Router();

router.get("/getAll/user", getControllers.getAll);
router.get("/getById/user/:id", getControllers.getById);
router.get("/getByName/user/:name", getControllers.getByName);
router.get("/whoami", auth, getControllers.whoami);

export default router;
