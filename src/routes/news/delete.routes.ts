import { Router } from "express";
import * as deleteControllers from "../../controllers/news/delete.controllers";

const router = Router();

router.get("/deleteById/news/:id", deleteControllers.deleteById);
router.get("/deleteByName/news/:name", deleteControllers.deleteByName);

export default router;
