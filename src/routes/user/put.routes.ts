import { Router } from "express";

import * as putControllers from "../../controllers/user/put.controllers";

const router = Router();

router.put("/updateById/user/:user_id", putControllers.updateById);
router.put("/updateByName/user/:user_name", putControllers.updateByName);

export default router;