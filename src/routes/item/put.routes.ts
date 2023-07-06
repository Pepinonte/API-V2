import { Router } from "express";

import * as putControllers from "../../controllers/item/put.controllers";

const router = Router();

router.put("/updateById/item/:item_id", putControllers.updateById);
router.put("/updateByName/item/:item_name", putControllers.updateByName);

export default router;
