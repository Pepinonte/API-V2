import { Router } from "express";
import * as getControllers from "../../controllers/item_type/get.controllers";

const router = Router();

router.get("/getAll/item_type", getControllers.getAll);

export default router;