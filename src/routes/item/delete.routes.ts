import { Router } from "express";

import * as item_deleteControllers from "../../controllers/item/delete.controllers";
import * as user_deleteControllers from "../../controllers/user/delete.controllers";

const router = Router();

router.delete("/deleteById/item/:id", item_deleteControllers.deleteById);
router.delete("/deleteById/user/:id", user_deleteControllers.deleteById);

export default router;
