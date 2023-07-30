import { Router } from "express";
import * as deleteControllers from "../../controllers/file/delete.controllers";

const router = Router();

router.delete("/deleteById/file/:id", deleteControllers.deleteById);
router.delete("/deleteByName/file/:name", deleteControllers.deleteByName);

export default router;