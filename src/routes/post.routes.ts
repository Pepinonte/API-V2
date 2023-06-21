import { Router } from "express";

import * as postControllers from "../controllers/post.controllers";

const router = Router();

router.post("/createOne", postControllers.createOne);

export default router;
