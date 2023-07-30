import { Router } from "express";
import * as putControllers from "../../controllers/item/put.controllers";
import auth from "../../middlewares/auth";

const router = Router();

router.put("/updateById/item/:id", auth, putControllers.updateById);
router.put("/updateByName/item/:name", auth, putControllers.updateByName);

export default router;
