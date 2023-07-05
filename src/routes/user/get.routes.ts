import { Router } from "express";

import * as getControllers from "../../controllers/user/get.controllers";

const router = Router();

router.get("/getAll/user", getControllers.getAll);
router.get("/getById/user/:id", getControllers.getById);

export default router;
