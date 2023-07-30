import { Router } from "express";
import * as getControllers from "../../controllers/file/get.controllers";

const router = Router();

router.get("/getAll/file", getControllers.getAll);
router.get("/getById/file/:id", getControllers.getById);
router.get("/getByName/file/:name", getControllers.getByName);

export default router;