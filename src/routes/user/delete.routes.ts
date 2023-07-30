import { Router } from "express";
import * as deleteControllers from "../../controllers/user/delete.controllers";
import auth from "../../middlewares/auth";

const router = Router();

router.delete("/logout", auth, deleteControllers.logout);
router.delete("/deleteBySession/user", auth, deleteControllers.deleteBySession);

export default router;
