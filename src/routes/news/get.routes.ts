import { Router } from "express";
import * as getControllers from "../../controllers/news/get.controllers";

const router = Router();

router.get("/getAll/news", getControllers.getAll);
router.get("/getById/news/:id", getControllers.getById);
router.get("/getByName/news/:name", getControllers.getByName);

export default router;
