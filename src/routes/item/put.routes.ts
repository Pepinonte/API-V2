import { Router } from "express";

import * as putControllers from "../../controllers/item/put.controllers";

const router = Router();

router.put("/updateById/:id", putControllers.updateById);

export default router;
