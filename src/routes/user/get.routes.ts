import { Router } from "express";
// import auth from "../../middlewares/auth";
import * as getControllers from "../../controllers/user/get.controllers";

const router = Router();

router.get("/getAll/user", getControllers.getAll);
router.get("/getById/user/:id", getControllers.getById);
router.get("/getByName/user/:name", getControllers.getByName);

export default router;
