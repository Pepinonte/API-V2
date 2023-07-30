import { Router } from "express";
import * as putControllers from "../../controllers/user/put.controllers";
import auth from "../../middlewares/auth";

const router = Router();

router.put("/updateBySession/user", auth,  putControllers.updateBySession);

export default router;