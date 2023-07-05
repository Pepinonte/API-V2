import { Router } from "express";

import * as getControllers from "../../controllers/item/get.controllers";

const router = Router();

router.get("/getAll", getControllers.getAll);
router.get("/getById/:id", getControllers.getById);

export default router;
