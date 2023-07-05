import { Router } from "express";

import * as deleteControllers from "../../controllers/user/delete.controllers";

const router = Router();

router.delete("/deleteById/user/:id", deleteControllers.deleteById);

export default router;
