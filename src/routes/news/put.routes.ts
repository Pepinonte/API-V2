import { Router } from "express";
import * as putControllers from "../../controllers/news/put.controllers";

const router = Router();

router.put("/updateById/news/:id", putControllers.updateById);
router.put("/updateByName/news/:name", putControllers.updateByName);

export default router;
