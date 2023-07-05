import { Router } from "express";

import * as putControllers from "../../controllers/user/put.controllers";

const router = Router();

router.put("/updateById/user/:id", putControllers.updateById);

export default router;