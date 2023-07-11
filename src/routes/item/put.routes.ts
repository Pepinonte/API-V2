import { Router } from "express";
import * as putControllers from "../../controllers/item/put.controllers";

const router = Router();

router.put("/updateById/item/:id", putControllers.updateById);
router.put("/updateByName/item/:name", putControllers.updateByName);

export default router;
