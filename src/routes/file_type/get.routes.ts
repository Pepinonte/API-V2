import { Router } from "express";
import * as getControllers from "../../controllers/file_type/get.controllers";

const router = Router();

router.get("/getAll/file_type", getControllers.getAll);

export default router;