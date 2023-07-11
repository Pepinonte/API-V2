import { Router } from "express";
import * as deleteControllers from "../../controllers/item/delete.controllers";

const router = Router();

router.delete("/deleteById/item/:id", deleteControllers.deleteById);
router.delete("/deleteByName/item/:name", deleteControllers.deleteByName);

export default router;
