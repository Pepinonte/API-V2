import { Router } from "express";

import * as getControllers from "../../controllers/user/get.controllers";

const router = Router();

router.get("/getAllUsers", getControllers.getAll);
router.get("/getUsersById/:id", getControllers.getById);

export default router;
