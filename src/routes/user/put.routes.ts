import { Router } from "express";

import * as putControllers from "../../controllers/user/put.controllers";

const router = Router();

router.put("/updateById/user", putControllers.updateById);
router.put("/updateByName/user", putControllers.updateByName);

export default router;