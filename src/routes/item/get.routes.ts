import { Router } from "express";

import * as getControllers from "../../controllers/item/get.controllers";

const router = Router();

router.get("/getAll/item", getControllers.getAll);
router.get("/getById/item/:id", getControllers.getById);


export default router;
