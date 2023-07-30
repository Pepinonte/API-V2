import { Router } from "express";
import * as postControllers from "../../controllers/item/post.controllers";
import auth from "../../middlewares/auth";

const router = Router();

router.post("/createOne/item", auth, postControllers.createOne);

export default router;
