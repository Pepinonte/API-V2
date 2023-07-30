import { Router } from "express";
import * as putControllers from "../../controllers/file/put.controllers";

const router = Router();

router.put("/updateById/file/:id", putControllers.updateById);
router.put("/updateByName/file/:name", putControllers.updateByName);

export default router;