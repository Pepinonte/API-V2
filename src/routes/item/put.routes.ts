import { Router } from "express";

import * as putControllers from "../../controllers/item/put.controllers";

const router = Router();

router.put("/updateById/item", putControllers.updateById);
router.put("/updateByName/item", putControllers.updateByName);

export default router;
