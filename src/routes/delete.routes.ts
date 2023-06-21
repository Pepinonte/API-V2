import { Router } from "express";

import * as deleteControllers from "../controllers/delete.controllers";

const router = Router();

router.delete("/deleteById/:id", deleteControllers.deleteById);

export default router;
